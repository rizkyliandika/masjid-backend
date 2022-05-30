const Sequelize = require('sequelize');
import db from '../connection'

const post = db.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    image: {
        type: Sequelize.STRING,
    }
}, {
    freezeTableName: true,
    timestamps: true
});

export default post;