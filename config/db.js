const mongoose = require("mongoose");
const connectionURI = "mongodb+srv://andi:111@cluster0-fopfk.gcp.mongodb.net/test?retryWrites=true&w=majority";

const InitiateMongoServer = async () =>{
    try{
        await mongoose.connect(connectionURI,{
            useNewURLParser:true
        });
        console.log("connected to DB");
    }catch(e){
        console.log(e);
        throw(e);
    }
}
module.exports = InitiateMongoServer;