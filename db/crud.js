var userSchema=require("./schema");
const UserOperations={
    register:function(userObject,response){
        var userSchObject=new userSchema({userid:userObject.userid,pwd:userObject.password})
        userSchObject.save(function(err,result){
            if(err){
                response.send("error");
            }
            else{
                response.send("registered successfully");
            }
        })
        
    },
    login:function(userObject,request,response){
    userSchema.find({userid:userObject.userid,pwd:userObject.password},function(err,docs){
    if(docs && docs.length>0){
        doLoginThings(request,response,docs);
    }
else{

    response.send("Invalid userid or password");
}
        })
},

        
   }
module.exports=UserOperations;
function doLoginThings(request,response,docs){
    request.session.userid=docs[0].userid;
        response.render('index',{"userid":request.session.userid})
    }
   