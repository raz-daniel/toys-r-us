import { Router } from "express";
import validation from "../middlewares/validation";
import paramsValidation from "../middlewares/param-validation";
import { deleteGameValidator, getGamesPerAudienceValidator, getGamesPerPriceValidator, newGameValidator } from "../controllers/games/validator";
import { addGame, getAllGames, getGamesPerAudience, getGamesPerPrice, removeGame } from "../controllers/games/controller";
import queryValidation from "../middlewares/query-validation";

const gamesRouter = Router()


gamesRouter.get('/audience/:audienceId', paramsValidation(getGamesPerAudienceValidator), getGamesPerAudience)
gamesRouter.get('/price', queryValidation(getGamesPerPriceValidator), getGamesPerPrice)
gamesRouter.get('/', getAllGames)
gamesRouter.post('/', validation(newGameValidator), addGame)
gamesRouter.delete('/:id', paramsValidation(deleteGameValidator), removeGame)

export default gamesRouter