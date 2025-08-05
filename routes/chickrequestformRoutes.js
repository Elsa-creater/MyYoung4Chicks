const express = require("express");
const router = express.Router();
const path = require("path");
const chickrequestform = require("../models/ChickrequestformModel");

router.get('/addchickrequestform', (req, res) => {
    res.render('chickrequestform');
});

router.post("/chickrequestform", async(req, res) => {
    try{
        console.log( req.body); 
        const newchickrequestform = new chickrequestform(req.body);
        await newchickrequestform.save();
    }catch(error){
            console.error("Error saving chick request:", error);
            res.status(400).send("Internal Server Error");
        };
       console.log("Chick request saved successfully"); 
         res.redirect('/addchickrequestform'); // Redirect to the same page or another page  
});


module.exports = router;




  // .then(() => {
        //     console.log("Chick request saved successfully");
        //     res.redirect('/addchickrequestform'); // Redirect to the same page or another page
        // })