const Sequelize = require('sequelize');
import db from '../connection'

const user = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    age: { type: Sequelize.INTEGER },
    address: { type: Sequelize.STRING },
    role: { type: Sequelize.STRING },
}, {
    freezeTableName: true,
    timestamps: true
});

export default user;