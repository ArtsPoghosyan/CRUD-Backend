const mongoose = require("mongoose");

async function start(){
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Database Connected");
    }catch(err){
        console.error(err);
    }
}

start();

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    gender: {type: Boolean, required: true}
});

const UserM = mongoose.model("user", UserSchema);

module.exports = {UserM};