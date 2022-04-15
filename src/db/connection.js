import { DataSource } from "typeorm";
import entities from "./entities";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: 'd1k4321',
    database: 'masjid',
    synchronize: true,
    logging: false,
    entities: Object.values(entities),
})
