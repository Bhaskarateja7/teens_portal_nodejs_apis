const Joi = require('joi');



const schema = Joi.object({
    category : Joi.string().required(),
    orgname :Joi.string(),
    
    jobdescription : Joi.string()
                      .min(5)
                      .max(500)
                      .required()
                      .label(' job_description'),
    payment         : Joi.string()
                      .required()
                      .label('payment'),
    timestart       : Joi.date()
                      .required()
                      .label('timestart'),
    timeend         :Joi.date()
                      .required()
                      .label('timeend'),
    timmings        : Joi.string()
                      .max(80)
                      .required()
                      .label('timmings'),
    state           : Joi.string()
                      .required()
                      .label('state'),

    city            : Joi.string()
                      .max(45)
                      .required()
                      .label('city'),
    zipcode         : Joi.string().length(5).pattern(/^[0-9]+$/).required()
                      .label('zipcode'),
    contactdetails  : Joi.string()
                      .required()
                      .label('contacts'),
   

})

module.exports = {
    jobSchema: schema
}