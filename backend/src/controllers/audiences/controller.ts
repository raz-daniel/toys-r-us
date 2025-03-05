import { NextFunction, Response, Request } from "express";
import Audience from "../../model/audience";


export async function getAudiences(req: Request, res: Response, next: NextFunction) {
    try {
        const audiences = await Audience.findAll()
        res.json(audiences)
    } catch (error) {
        next(error)
    }
}


