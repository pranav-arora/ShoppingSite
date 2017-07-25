const express=require("express");
const route=express.Router();
const path=require("path");
const user=require("../User/user")
const crud=require("../db/crud")
route.post("/welcome",(request,response)=>{
   
    var userid=request.body.userid;
    var password=request.body.pwd;
    var userObj=new user(userid,password);
   crud.login(userObj,request,response)
       });
route.get('/welcome',(req,res)=>{
	if(req.session.userid){
		res.render('index',{"userid":req.session.userid})
	}
	else{
		var normalPath = path.normalize(__dirname+"/..");
		var fullPath = path.join(normalPath,"/public/login.html");
		res.sendFile(fullPath); 
	}
});
route.post("/register",(request,response)=>{
     var userid=request.body.userid;
    var password=request.body.pwd;
    var userObj=new user(userid,password);
    crud.register(userObj,response);
    
})
    
route.get("/",(request,response)=>{
    response.sendFile(__dirname+"/public/index.html")
});
module.exports=route;