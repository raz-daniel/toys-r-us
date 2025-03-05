import { NextFunction, Response, Request } from "express";
import Book from "../../model/book";
import Genre from "../../model/genre";


export async function getAllBooks(req: Request, res: Response, next: NextFunction) {
    try {
        const books = await Book.findAll({
            include: [ Genre ]
        }) 
        res.json(books)
    } catch (error) {
        next(error)
    }
}

export async function getBooksPerGenre(req: Request<{ genreId: string }>, res: Response, next: NextFunction) {
    try {
        const { genreId } = req.params
        const book = await Book.findAll({
            where: {genreId},
            include: [Genre]
        })
        res.json(book)
    } catch (error) {
        next(error)
    }
}


export async function addBook(req: Request<{}, {}, {
    name: string,
    summary: string,
    genreId: string,
    price: number,
    stock: number
}>, res: Response, next: NextFunction) {
    try {
        const newBook = await Book.create(req.body)
        res.json(newBook)
    } catch (error) {
        next(error)
    }
}

export async function removeBook(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const {id} = req.params
        await Book.destroy({where: {id}})
        res.json({success: true})
    } catch (error) {
        next(error)
    }
}