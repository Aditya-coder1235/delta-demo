const mongoose=require("mongoose");
const initdata=require("./data.js");
const Listing=require("../models/listing.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

main()
.then(res=>{console.log("connect to DB")})
.catch(err=>{console.log(err)});




const initDB=async () =>{
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj,owner:"68baadd1142c764e32a26ef1"}));
      await Listing.insertMany(initdata.data);
    };


initDB()