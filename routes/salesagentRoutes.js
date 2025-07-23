const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/addsalesagent', (req, res) => {
    res.render('salesagent')
})
router.post('/addsalesagent', (req, res) => {
    console.log(req.body);
});
module.exports = router;