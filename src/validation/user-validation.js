import Joi from "joi";
const registerUserValidation = Joi.object({
    username: Joi.string.max(100).required(),
});