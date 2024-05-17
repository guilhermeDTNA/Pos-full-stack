import Course from '../models/Course.js';

const saveCourse = async (courseModel) => {
    const save = await Course.create(courseModel);
    return save;
}

const getAllCourses = async (courseModel) => {
    return await Course.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getCourseById = async (id) => {
    return await Course.findByPk(id);
}

const deleteCourseById = async (id) => {
    return await Course.destroy({
        where: {id: id}
    });
}

const updateCourseById = async (id, courseModel) => {
    try{
        const result = await Course.update(courseModel, {
            where: {id: id}
        })

        if(result[0] === 1){
            return { message: "Course updated with success" } 
        } else{
            return {message: "Couldn't find ${id} to update", status: 404}
        }
    } catch(error){
        console.log(error);
    }
}

const factory = {
    saveCourse,
    getAllCourses,
    getCourseById,
    deleteCourseById,
    updateCourseById
}

export default factory;