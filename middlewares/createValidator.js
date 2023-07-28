const Joi = require("joi");

module.exports = async function createValidator(req, res, next){
    try{
        const {email, name, gender } = req.body;

        const schema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            gender: Joi.boolean().required()
        });
        const {error} = schema.validate({name, email, gender: gender === "true" ? true : false});

        if(error){
            return res.render('createPage', {title: "Create Page", message: false, errorMessage: error.details[0].message});
        }
        next();
    }catch(err){
        return res.render('error', {title: "Error Page", error: err});
    }
}
