var mysql = require('mysql');
const express = require('express')
const app = express()


const bodyParser =require('body-parser')
app.use(function(req,res,next){
    res.header ("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers" , 'Origin, Content-Type, X-Auth-Token, content-type');
    next();
});


var cardataparser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.json())

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
var price;
var img;
var title;
app.post('/carwashinshert', cardataparser ,function(req,res){
 
   Price=req.body.Price;
   Img=req.body.Img;
   Title=req.body.Title;
    // console.log(price);
    // console.log(img);
    // console.log(title);
    // res.json({"response":true,"responseString":"Please specify " });

    // con.connect(function(price,title,img,err) {
    //   if (err) throw err;
    //   console.log("Connected!");
      
      
      
      // Insert a record in the "customers" table:
      console.log(Price);
    
      console.log(Img);
      console.log(Title);
      var sql = "INSERT INTO cardata (Price,Title,Img ) VALUES (?,?,?)";
      con.query(sql, [ Price,Title,Img], function (err, result) {
        if (err) throw err;
        console.log("record inserted",result);
      });
      
    
    // });
  
})
app.listen(3000,function(){
console.log("server..")
})





// app.post('/carwash',(req,res)=>{
//   res.send({
  
//     price
//   })
// })
// app.listen(3000,function(){
// console.log("server..")
// })




