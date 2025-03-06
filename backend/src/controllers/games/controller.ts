import { NextFunction, Response, Request } from "express";
import Game from "../../model/game";
import Audience from "../../model/audience";
import { literal, Op } from "sequelize";

export async function getAllGames(req: Request, res: Response, next: NextFunction) {
    try {
        const games = await Game.findAll({
            include: Audience
        })
        res.json(games)
    } catch (error) {
        next(error)
    }
}

export async function getGamesPerAudience(req: Request<{ audienceId: string }>, res: Response, next: NextFunction) {
    try {
        const { audienceId } = req.params
        const games = await Game.findAll({
            where: { audienceId },
            include: [Audience]
        })
        res.json(games)
    } catch (error) {
        next(error)
    }
}

export async function getGamesPerPrice(req: Request, res: Response, next: NextFunction) {
    try {
        const { maxGamePrice } = req.query
        const games = await Game.findAll({
            where: {
                price: {
                    [Op.lte]: maxGamePrice
                }
            },
            include: [Audience]
        })
        res.json(games)
    } catch (error) {
        next(error)
    }
}

export async function addGame(req: Request<{}, {}, {
    name: string,
    description: string,
    audienceId: string,
    price: number,
}>, res: Response, next: NextFunction) {
    try {
        const newGame = await Game.create(req.body)
        res.json(newGame)
    } catch (error) {
        next(error)
    }
}

export async function removeGame(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        await Game.destroy({ where: { id } })
        res.json({ success: true })
    } catch (error) {
        next(error)
    }
}