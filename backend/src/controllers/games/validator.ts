import Joi from "joi";

export const newGameValidator = Joi.object({
    name: Joi.string().trim().max(40).required(),
    description: Joi.string().trim().max(255).required(),
    audienceId: Joi.string().uuid().required(),
    price: Joi.number().min(0).required()
})

export const getGamesPerAudienceValidator = Joi.object({
    audienceId: Joi.string().uuid().required()
})

export const deleteGameValidator = Joi.object({
    id: Joi.string().uuid().required()
})