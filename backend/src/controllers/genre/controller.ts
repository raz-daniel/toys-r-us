import { NextFunction, Response, Request } from "express";
import Genre from "../../model/genre";

export async function getGenres(req: Request, res: Response, next: NextFunction) {
    try {
        const genre = await Genre.findAll()
        res.json(genre)
    } catch (error) {
        next(error)
    }
}


