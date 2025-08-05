const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/addChicks', (req, res) => {
    res.render('chicks')
});

router.post('/addChicks', (req, res) => {
    console.log(req.body)
});

router


module.exports = router;

