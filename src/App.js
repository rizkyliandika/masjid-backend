import express from "express";
import configure from './config/config';
import sequelize from './db/connection';
import AppRoute from './routes';

configure();
const initialization = async () => {
    try {

        const app = express();

        sequelize.authenticate().then(() => {
            app.use(express.json());
            app.use(express.urlencoded({ extended: true }));
            app.use(AppRoute);
            app.listen(process.env.REACT_APP_PORT, () => {
                console.log(`Application ${process.env.REACT_APP_NAME} succesfully started on port ${process.env.REACT_APP_PORT}.`);
            });
        });
        await sequelize.sync({ force: true });
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
initialization();