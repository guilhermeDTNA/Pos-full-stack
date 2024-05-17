import User from '../models/User.js';

const saveUser = async (userModel) => {
    const save = await User.create(userModel);
    return save;
}

const getAllUsers = async (userModel) => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getUserById = async (id) => {
    return await User.findByPk(id);
}

const deleteUserById = async (id) => {
    return await User.destroy({
        where: {id: id}
    });
}

const updateUserById = async (id, userModel) => {
    try{
        const result = await User.update(userModel, {
            where: {id: id}
        })

        if(result[0] === 1){
            return { message: "User updated with success" } 
        } else{
            return {message: "Couldn't find ${id} to update", status: 404}
        }
    } catch(error){
        console.log(error);
    }
}

const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
}

export default factory;