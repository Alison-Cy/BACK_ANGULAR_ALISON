import {config} from "dotenv"
import { DataSource } from "typeorm";

const env= process.env.NODE_ENV || 'development'

config({
    override: true,
    path:`.env.${env}`,
    debug:true //para validar que se esta modificando
})

export default new DataSource({
    type:'postgres',
    host:process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities:['src/**/*.entity.ts'],
    migrations:['src/database/migrations/*.ts']
});