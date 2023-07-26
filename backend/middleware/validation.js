 const joi = require('joi');

function validationsignup(req, res, next){
    const schema = joi.object({
        FirstName: joi.string().required(),
        LastName: joi.string().required(),
        UserName: joi.string().required(),
        Email: joi.string().required().email(),
        Password: joi.string().required(),
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    next()
}

function validationlogin(req, res, next){
    const schema = joi.object({
        Email: joi.string().required().email(),
        Password: joi.string().required(),
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    next()
}
module.exports ={validationsignup , validationlogin};
