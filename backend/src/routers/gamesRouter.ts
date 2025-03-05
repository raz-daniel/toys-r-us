import { Router } from "express";
import validation from "../middlewares/validation";
import paramsValidation from "../middlewares/param-validation";
import { deleteGameValidator, getGamesPerAudienceValidator, newGameValidator } from "../controllers/games/validator";
import { addGame, getGamesPerAudience, removeGame } from "../controllers/games/controller";

const gamesRouter = Router()

gamesRouter.get('/:audienceId', paramsValidation(getGamesPerAudienceValidator), getGamesPerAudience)
gamesRouter.post('/', validation(newGameValidator), addGame)
gamesRouter.delete('/:id', paramsValidation(deleteGameValidator), removeGame)

export default gamesRouter