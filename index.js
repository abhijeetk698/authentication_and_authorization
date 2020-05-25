const   express                     = require("express"),
        mongoose                    = require("mongoose"),
        User                        = require("./models/user.js");
        passport                    = require("passport"),
        bodyParser                  = require("body-parser"),
        localStrategy               = require("passport-local"),
        passportLocalMongoose       = require("passport-local-mongoose");
        expressSession              = require("express-session");


// DB Configure

mongoose.connect("mongodb://localhost/auth_auth_app",{ useNewUrlParser: true ,useUnifiedTopology: true });

const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSession({
    secret : "this is an authentication app",
    resave : false,
    saveUninitialized : false
}));

// passport initialization
app.use(passport.initialize());
app.use(passport.session());

// passport serializing and deserializing

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ROUTES =========================================>>>>>>>>


app.get("/",(req,res)=>{
    res.render("home");    
});

app.get("/secret",isLoggedIn,(req,res)=>{
    res.render("secret");
});

// AUTH ROUTES ----------------------------------------------


// Register Route .....................................

app.get("/register",(req,res)=>{
    res.render("register");
})

app.post("/register",(req,res)=>{
    User.register(new User({username:req.body.username}),req.body.password,(err,user)=>{
        if(err){
            console.log(err);
            return res.redirect("register");
        }
        passport.authenticate("local")(req,res,()=>{
            console.log(user);
            res.redirect("secret");
        })
    })
});

// login route .......................................................................

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login",passport.authenticate("local",{
    successRedirect : "/secret",
    failureRedirect : "/login"
}),(req,res)=>{})

// LOG OUT ROUTE

app.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }res.redirect("/login");
}

app.listen(3000,()=>{
    console.log("Server has started ....")
})