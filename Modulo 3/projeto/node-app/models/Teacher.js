import DataTypes from 'sequelize';
import sequelize from '../utils/database.js';

const Teacher = sequelize.define('teacher', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    course_id: {
        type: DataTypes.INTEGER
    }
},{ underscored : true });

export default Teacher;