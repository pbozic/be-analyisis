const Joi = require('joi');
const prisma = require("../prisma/prisma");

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});
const registerSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required().external(async (email, helpers) => {
        console.log("helpers", helpers.error);
        const isEmailInUse = await prisma.users.findUnique({
            where: {
                email
            }
        });
        if(isEmailInUse) {
            throw new Error(
                "Account with this email already exists.",
              );
        }

        return email;
    }),
    password: Joi.string().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).required(),
    confirm_password: Joi.ref('password'),
    telephone: Joi.string().required().external(async (telephone, helpers) => {
        
        const isPhoneNumberInUse = await prisma.users.findUnique({
            where: {
                telephone
            }
        });
        if(isPhoneNumberInUse) {
            
            throw new Error(
                "Account with this phone number already exists.",
            );
        }

        return telephone;
    }),
});
module.exports = {
    loginSchema,
    registerSchema
};