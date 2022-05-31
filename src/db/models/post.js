const Sequelize = require('sequelize');
import db from '../connection'
import user from './user';

const post = db.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    vcrea: {
        type: Sequelize.STRING
    },
    dcrea: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    timestamps: true
});

// post.belongsTo(user);

export default post;