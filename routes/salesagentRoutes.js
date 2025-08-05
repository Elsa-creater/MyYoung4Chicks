const express = require("express");
const router = express.Router();
const path = require("path");
const salesagent = require("../models/SalesagentModel");

router.get('/addsalesagent', (req, res) => {
    res.render('salesagent')
})

router.post("/salesagent", async(req, res) => {
    try{
        console.log( req.body); 
        const newsalesagent = new salesagent(req.body);
        await newsalesagent.save();
       }catch(error){
               console.error("Error saving sales agent:", error);
               res.status(400).send("Internal Server Error");
           };
          console.log("Sales agent saved successfully"); 
            res.redirect('/addsalesagent'); // Redirect to the same page or another page  
   });
   
   
module.exports = router;