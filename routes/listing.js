
const express=require("express");
const router=express.Router();
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {isloggedIn,isOwner,validateListing}=require("../middleware.js");
const listingConroller=require('../controller/listings.js');
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });



//indexroute
router.get("",wrapAsync(listingConroller.index));

//add route
router.get("/new",isloggedIn,wrapAsync(listingConroller.addListing));

//create route
router.post("/",upload.single("listing[image]"),validateListing,wrapAsync(listingConroller.createListing));



//show route
router.get("/:id",wrapAsync(listingConroller.showListings));


//edit route
router.get("/:id/edit",isOwner,isloggedIn,wrapAsync(listingConroller.editListing));

//update route
router.put("/:id",isloggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingConroller.updateListing));

//delete route
router.delete("/:id",isloggedIn,isOwner,wrapAsync(listingConroller.destroyListing));


module.exports = router;