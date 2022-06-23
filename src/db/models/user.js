const Sequelize = require('sequelize');
import db from '../connection'
import post from './post';

const user = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: { type: Sequelize.STRING },
    fullname: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    age: { type: Sequelize.INTEGER },
    address: { type: Sequelize.STRING },
    role: { type: Sequelize.STRING },
}, {
    freezeTableName: true,
    timestamps: true
});

user.hasMany(post, { foreignKey: 'id' });
user.belongsTo(post, { foreignKey: 'id' })

export default user;