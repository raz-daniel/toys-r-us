import { Router } from "express";
import validation from "../middlewares/validation";
import paramsValidation from "../middlewares/param-validation";
import { addBook, getAllBooks, getBooksPerGenre, removeBook } from "../controllers/books/controller";
import { deleteBookValidator, getBooksPerGenreValidator, newBookValidator } from "../controllers/books/validator";

const booksRouter = Router()

booksRouter.get('/', getAllBooks)
booksRouter.get('/:genreId', paramsValidation(getBooksPerGenreValidator), getBooksPerGenre)
booksRouter.post('/', validation(newBookValidator), addBook)
booksRouter.delete('/:id', paramsValidation(deleteBookValidator), removeBook)

export default booksRouter