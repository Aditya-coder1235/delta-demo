const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController=require("../controller/users");

router.get("/signup",userController.getsignup);

router.post("/signup",wrapAsync(userController.postsignup));

router.get("/login",userController.getLogin);

router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),userController.postLogin);

router.get("/logout",userController.logout)

module.exports=router;