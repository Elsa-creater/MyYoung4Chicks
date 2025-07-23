const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/addyouthfarmer', (req, res) => {
    res.render('youthfarmer');
});
router.post('/addyouthfarmer', (req, res) => {
    console.log(req.body);
});
module.exports = router;