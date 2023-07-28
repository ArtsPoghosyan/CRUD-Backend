const UserModel = require("../models/UserModel");

class UserController {
    static createUserPost = async (req, res, next)=>{
        try{
            const {email, name, gender} = req.body;
            await UserModel.createUser({name, email, gender: gender === "true" ? true : false});
            return res.render('createPage', {message: "user succesfully created", title: "Create Page", errorMessage: false});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    } 
    static readUserPost = async (req, res, next)=>{
        try{
            const {_id, email} = req.body;

            if(_id || email){
                const user = await UserModel.readUser(_id ? {_id} : {email});
                if(user){
                    return res.render('readPage', {title: "Read Page", errorMessage: false, user});
                }
                return res.render('readPage', {title: "Read Page", errorMessage: "not found user", user:false});
            }
            return res.render('readPage', {title: "Read Page", errorMessage: "type ID or EMAIL", user:false});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    }
    static updateUserPost = async (req, res, next)=>{
        try{
            const {_id, email, name, gender} = req.body;

            if(_id || email){
                const user = await UserModel.updateUser((_id ? {_id} : {email}), (name && gender ? {name, gender: gender === "true" ? true: false} : name ? {name} : {gender: gender === "true" ? true: false}));
                if(user){
                    return res.render('updatePage', {title: "Update Page", message: "updated succesfully", errorMessage: false});
                }
                return res.render('updatePage', {title: "Update Page", message: false, errorMessage: "not found user"});
            }

            return res.render('updatePage', {title: "Update Page", message: false, errorMessage: "type ID or EMAIL"});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    }
    static deleteUserPost = async (req, res, next)=>{
        try{
            const {_id, email} = req.body;

            if(_id || email){
                const user = await UserModel.deleteUser(_id ? {_id} : {email});
                if(user){
                    return res.render('deletePage', {title: "Delete Page", message: "deleted succesfully", errorMessage: false});
                }
                return res.render('deletePage', {title: "Delete Page", message: false, errorMessage: "not found user"});
            }

            return res.render('deletePage', {title: "Delete Page", message: false, errorMessage: "type ID or EMAIL"});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    }
}

module.exports = UserController;