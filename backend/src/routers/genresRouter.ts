import { Router } from "express";
import { getGenres } from "../controllers/genre/controller";



const genresRouter = Router()

genresRouter.get('/', getGenres)

export default genresRouter