//Author: Bonevy BEBY
//var http=require('http');
//http module can create a http server that listens to the server port and gives
//the response back to the client
/*http.createServer(function(req, res){
    res.write("welcome to node world!");
    res.end();
}).listen(8080);*/
const express= require('express');
const app=express();
/*app.get("/",function (req, resp) {
    resp.send("Welcome to express js");
})*/
//added for api
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('api/users',require('./routes/api/users'));
//end added api
const port=3000;
app.listen(port,()=>{
    console.log("Server start on port "+port)
})


