const {UserM} = require("../services/db");

class UserModel {
    static createUser = async (data)=>{
        return await UserM.create(data);
    } 
    static readUser = async (state)=>{
        return await UserM.findOne(state);
    } 
    static updateUser = async (state, data)=>{
        return await UserM.findOneAndUpdate(state, data);
    } 
    static deleteUser = async (state)=>{
        return await UserM.findOneAndDelete(state);
    }
}

module.exports = UserModel;