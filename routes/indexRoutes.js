const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/', (req, res) => {
    res.send("This is the Landing Page")
});
router.post('/addindex', (req, res) => {
    console.log(req.body);
});

module.exports = router;