const express = require('express')
const app = express()
var ex1 = require('./Root/element.js');
// var ex2 = require('./carwash_details.js');
const bodyParser =require('body-parser')
app.use(function(req,res,next){
    res.header ("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers" , 'Origin, Content-Type, X-Auth-Token, content-type');
    next();
});


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

 
app.post('/register',ex1.register);

app.post('/login',ex1.login);
// app.get('/carwash',ex2.carwash);
app.listen(3000) 
