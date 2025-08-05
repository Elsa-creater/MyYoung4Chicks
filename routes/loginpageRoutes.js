const express = require("express");
const router = express.Router();
const path = require("path");
const loginpage = require("../models/loginpagemodel");

router.get('/addloginpage', (req, res) => {
    res.render('loginpage');
});

// router.post("/loginpage", (req, res) => {
//     console.log( req.body); 
//     const newloginpage = new loginpage(req.body);
//     newloginpage.save()
//         .then(() => {
//             console.log("login page saved successfully");
//             res.redirect('/addloginpage'); // Redirect to the same page or another page
//         })

        
//         .catch((error) => {
//             console.error("Error login page request:", error);
//             res.status(500).send("Internal Server Error");
//         });
      
// });

// Handle registration
router.post('/loginpage', async (req, res) => {
  const { role, username, password } = req.body;

  try {
    const existing = await User.findOne({ username });
    if (existing) return res.send('❌ Username already exists');

    const newUser = new User({ role, username, password }); // later hash password
    await newUser.save();
    res.redirect('/loginpage');  // Redirect to the same page or another page
  } catch (err) {
    res.status(500).send('❌ Registration error');
  }
});

module.exports = router;