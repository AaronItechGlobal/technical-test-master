const { json } = require("express");
const express = require("express");
const http = require("http");
const PORT = 5000; 
const app = express();

var users= require('./data/users.json');// pillamos el json con los datos de usuarios


http.createServer(app).listen(PORT); // request que de repsuesta nos pasa el json de usuarios
app.get('/users', (req,res)=>{
    res.json(users);
})
