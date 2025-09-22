const express=require("express");
const router=express.Router({mergeParams:true});
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const Review=require("../models/review.js");
const {validatereview , isloggedIn, isReviewAuther}=require("../middleware.js");
const reviewController= require("../controller/reviews.js");




//review 
//post route
router.post("",validatereview,isloggedIn,wrapAsync(reviewController.createReview));

//delete review route
router.delete("/:reviewId",isloggedIn,isReviewAuther,wrapAsync(reviewController.destroyReview));

module.exports=router;