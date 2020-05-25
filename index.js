const   express                     = require("express"),
        mongoose                    = require("mongoose"),
        User                        = require("./models/user.js");
        passport                    = require("passport"),
        bodyParser                  = require("body-parser"),
        passportLocalMongoose       = require("passport-local-mongoose");
        expressSession              = require("express-session");


// DB Configure

mongoose.connect("mongodb://localhost/auth_auth_app",{ useNewUrlParser: true ,useUnifiedTopology: true });

const app=express();
app.set("view engine","ejs");

app.use(expressSession({
    secret : "this is an authentication app",
    resave : false,
    saveUninitialized : false
}));

// passport initialization
app.use(passport.initialize());
app.use(passport.session());

// passport serializing and deserializing

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.seria


app.get("/",(req,res)=>{
    res.render("home");    
});

app.get("/secret",(req,res)=>{
    res.render("secret");
});

app.listen(3000,()=>{
    console.log("Server has started ....")
})