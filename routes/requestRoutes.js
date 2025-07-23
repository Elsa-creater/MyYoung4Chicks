const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/addrequest', (req, res) => {
    res.render('request')
});

router.post('/addrequest', (req, res) => {
    console.log(req.body)
});



module.exports = router;
