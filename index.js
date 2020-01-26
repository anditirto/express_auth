const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const InitiateMongoServer = require('./config/db.js');
const user = require('./routes/user');

InitiateMongoServer();

//PORT
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use("/user",user);

app.get ("/", (req,res)=>{
    res.json({message:"API WORKING"})
});

app.listen(PORT, (req,res)=>{
    console.log(`SERVER STARTED AT PORT : ${PORT}`);
});