const UserModel = require("../models/UserModel");

module.exports = async function checkUser(req, res, next){
    try{
        const {email} = req.body;
        const user = await UserModel.readUser({email});
        if(!user){
            return next();
        }
        return res.render('createPage', {title: "Create Page", message: false, errorMessage: "by this email already created user"});
    }catch(err){
        return res.render('error', {title: "Error Page", error: err});
    }
}