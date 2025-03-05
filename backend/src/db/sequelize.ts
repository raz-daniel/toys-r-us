import { Sequelize } from "sequelize-typescript";
import config from "config";
import Game from "../model/game";
import Audience from "../model/audience";


const logging = config.get<boolean>('sequelize.logging') ? console.log : false


const sequelize = new Sequelize({
    models: [ Game, Audience ],
    dialect: 'mysql',
    ...config.get('db'),
    logging
})

export default sequelize