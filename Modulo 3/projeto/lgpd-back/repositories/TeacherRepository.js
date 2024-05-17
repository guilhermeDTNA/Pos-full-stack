import Teacher from '../models/Teacher.js';

const saveTeacher = async (teacherModel) => {
    const save = await Teacher.create(teacherModel);
    return save;
}

const getAllTeachers = async (teacherModel) => {
    return await Teacher.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getTeacherById = async (id) => {
    return await Teacher.findByPk(id);
}

const deleteTeacherById = async (id) => {
    return await Teacher.destroy({
        where: {id: id}
    });
}

const updateTeacherById = async (id, teacherModel) => {
    try{
        const result = await Teacher.update(teacherModel, {
            where: {id: id}
        })

        if(result[0] === 1){
            return { message: "Teacher updated with success" } 
        } else{
            return {message: `Couldn't find ${id} to update`, status: 404}
        }
    } catch(error){
        return error;
    }
}

const factory = {
    saveTeacher,
    getAllTeachers,
    getTeacherById,
    deleteTeacherById,
    updateTeacherById
}

export default factory;