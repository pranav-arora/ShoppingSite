const mongoose=require("./connection");
var Schema=mongoose.Schema;
var User=new Schema({userid:{type:String,require:true,unique:true},pwd:String});
var UserSchema=mongoose.model("users",User);
module.exports=UserSchema;
