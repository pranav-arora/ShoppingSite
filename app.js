const express=require("express");
const app=express();
var bodyParser = require('body-parser');
const session = require("express-session");
const cookieParser = require("cookie-parser");
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 app.use(session({
     secret: 'cat keyboard dog',
	  	cookie: { secure: false,maxAge: 60000
				  }  // 1 min session
	}));
app.use(cookieParser());
// parse application/json 
app.use(bodyParser.json())
app.use(express.static("public"))
app.set('view engine','ejs');
const routes=require("./routes/routes")
app.use('/admin',routes);
app.listen(5678,()=>{
    console.log("Server Start");
})