import express from "express";
import configure from './config/config';
import { AppDataSource } from './db/connection';
import AppRoute from './routes';

configure();
AppDataSource.initialize()
    .then((connection) => {
        if (connection.isInitialized) {
            console.log('Database Connected');

            const app = express();
            app.use(express.json());
            app.use(express.urlencoded({ extended: true }));
            app.use(AppRoute);
            app.listen(process.env.APP_PORT, () => {
                console.log(`Application ${process.env.APP_NAME} succesfully started on port ${process.env.APP_PORT}.`);
            });
        }

    })
    .catch((err) => {
        console.log(`Error starting application`);
        console.error(err);
    });
