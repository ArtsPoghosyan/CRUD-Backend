const UserModel = require("../models/UserModel");

class IndexController {
    static index = async (req, res, next)=>{
        try{
            return res.render('index', {title: "Home Page"});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    } 
    static createPage = async (req, res, next)=>{
        try{
            return res.render('createPage', {title: "Create Page", message: false, errorMessage:false});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    } 
    static readPage = async (req, res, next)=>{
        try{
            return res.render('readPage', {title: "Read Page", errorMessage:false, user:false});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    } 
    static updatePage = async (req, res, next)=>{
        try{
            return res.render('updatePage', {title: "Update Page", message: false, errorMessage:false});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    } 
    static deletePage = async (req, res, next)=>{
        try{
            return res.render('deletePage', {title: "Delete Page", message: false, errorMessage:false});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    } 
}

module.exports = IndexController;