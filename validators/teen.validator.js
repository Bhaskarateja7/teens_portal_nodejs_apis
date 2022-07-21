const Joi = require('joi');
const { joiPassword } = require('joi-password');



const schema = Joi.object({
    email: Joi.string()
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
    firstname: Joi.string().required() ,
    lastname : Joi.string().required(),
    dob: Joi.date().messages({'date.format': `Date format is YYYY-MM-DD`,'date.max':`Age must be 18+`}).required(),
    gender  : Joi.string().valid('male', 'female').required(),
    parentname:Joi.string().required(),
    parentemail:Joi.string()
                  .required().label('Email')
                  .email({ minDomainSegments: 1 }).required(),
    parentcontact : Joi.string().length(10).pattern(/^[0-9]+$/).replace(/\*/g, '%').required(),
    ssn :  Joi.string().length(9).pattern(/^[0-9]+$/).replace(/\*/g, '%'),
    address :  Joi.string().required(),
    city :  Joi.string().required(),
    state :  Joi.string().required(),
    zipcode :Joi.string().required(),

})

const schemas = Joi.object({
   
    phonenumber : Joi.string().length(10).pattern(/^[0-9]+$/).replace(/\*/g, '%').required()  


})

module.exports = {
    teenSchema: schema,
    phoneSchema: schemas
}