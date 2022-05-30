import configure from '../config/config';

const { Sequelize } = require('sequelize');
configure();

const sequelize = new Sequelize(process.env.REACT_APP_DB_NAME, process.env.REACT_APP_DB_USERNAME, process.env.REACT_APP_DB_PASSWORD, {
    host: process.env.REACT_APP_DB_HOST,
    dialect: 'postgres'
})

export default sequelize;