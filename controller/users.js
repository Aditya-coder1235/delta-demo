const User=require("../models/user");

module.exports.getsignup=(req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.postsignup=async(req,res,next)=>{
    try {
        let {username,email,password}=req.body;
     const newUser=new User({email,username});
    const registerUser= await User.register(newUser,password);
    req.login(registerUser,(err)=>{
        if(err){
           return next(err)
        }
        req.flash("success","Welecome to Wanderlust!");
        res.redirect("/listings");
    })
 
        
    } catch (error) {
        req.flash("error",error.message);
        res.redirect("/signup");
    }
}

module.exports.getLogin=(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.postLogin=async (req,res)=>{
    req.flash("success","Welcome Back to wanderlust !");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    })
}