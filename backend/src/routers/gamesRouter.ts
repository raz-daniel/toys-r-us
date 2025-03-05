import { Router } from "express";
import validation from "../middlewares/validation";
import paramsValidation from "../middlewares/param-validation";
import { deleteGameValidator, getGamesPerAudienceValidator, getGamesPerPriceValidator, newGameValidator } from "../controllers/games/validator";
import { addGame, getGamesPerAudience, getGamesPerPrice, removeGame } from "../controllers/games/controller";
import queryValidation from "../middlewares/query-validation";

const gamesRouter = Router()

gamesRouter.get('/:audienceId', paramsValidation(getGamesPerAudienceValidator), getGamesPerAudience)
gamesRouter.get('/', queryValidation(getGamesPerPriceValidator), getGamesPerPrice)
gamesRouter.post('/', validation(newGameValidator), addGame)
gamesRouter.delete('/:id', paramsValidation(deleteGameValidator), removeGame)

export default gamesRouter