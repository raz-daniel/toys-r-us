import { Sequelize } from "sequelize-typescript";
import config from "config";
import Book from "../model/book";
import Genre from "../model/genre";


const logging = config.get<boolean>('sequelize.logging') ? console.log : false


const sequelize = new Sequelize({
    models: [ Book, Genre],
    dialect: 'mysql',
    ...config.get('db'),
    logging
})

export default sequelize