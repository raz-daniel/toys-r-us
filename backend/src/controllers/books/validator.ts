import Joi from "joi";

export const newBookValidator = Joi.object({
    name: Joi.string().trim().max(255).required(),
    summary: Joi.string().trim().max(255).required(),
    genreId: Joi.string().uuid().required(),
    price: Joi.number().min(0).required(),
    stock: Joi.number().min(0).required()
})

export const getBooksPerGenreValidator = Joi.object({
    genreId: Joi.string().uuid().required()
})

export const deleteBookValidator = Joi.object({
    id: Joi.string().uuid().required()
})