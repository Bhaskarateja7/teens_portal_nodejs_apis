const Joi = require('joi');
const { joiPassword } = require('joi-password');



const schema = Joi.object({
    email: Joi.string()
    .required().label('Email')
    .email({ minDomainSegments: 1 }),
    password: joiPassword
    .string() 
    .min(6)
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .messages({
          'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
          'password.minOfSpecialCharacters':
                '{#label} should contain at least {#min} special character',
          'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
          'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
          'password.noWhiteSpaces': '{#label} should not contain white spaces',
    
    }),
    confirmpassword: Joi.string().valid(Joi.ref('password')).required(),
    name : Joi.string().required(),
    phonenumber : Joi.string().length(10).pattern(/^[0-9]+$/).replace(/\*/g, '%').required(),
    ssn :  Joi.string().length(9).pattern(/^[0-9]+$/).replace(/\*/g, '%').required(),
    address :  Joi.string().required(),
    city :  Joi.string().required(),
    state :  Joi.string().required(),
    zipcode :Joi.string().length(5).pattern(/^[0-9]+$/).required() 


})

const schemas = Joi.object({
   
    phonenumber : Joi.string().length(10).pattern(/^[0-9]+$/).replace(/\*/g, '%').required()  


}) 

module.exports = {
    vendorSchema: schema,
    phoneSchema: schemas
}