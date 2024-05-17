import Evaluation from '../models/Evaluation.js';

const saveEvaluation = async (evaluationModel) => {
    const save = await Evaluation.create(evaluationModel);
    return save;
}

const getAllEvaluations = async (evaluationModel) => {
    return await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getEvaluationById = async (id) => {
    return await Evaluation.findByPk(id);
}

const deleteEvaluationById = async (id) => {
    return await Evaluation.destroy({
        where: {id: id}
    });
}

const updateEvaluationById = async (id, evaluationModel) => {
    try{
        const result = await Evaluation.update(evaluationModel, {
            where: {id: id}
        })

        if(result[0] === 1){
            return { message: "Evaluation updated with success" } 
        } else{
            return {message: "Couldn't find ${id} to update", status: 404}
        }
    } catch(error){
        console.log(error);
    }
}

const factory = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById
}

export default factory;