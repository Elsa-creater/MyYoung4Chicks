//1.Dependencies
const express = require("express");
const path = require('path');

//importing routes
const studyRoutes = require("./routes/studyRoutes");
const indexRoutes = require("./routes/indexRoutes");
const chicksRoutes = require("./routes/chicksRoutes");
const youthfarmerRoutes = require("./routes/youthfarmerRoutes");
const salesagentRoutes = require("./routes/salesagentRoutes");
const requestRoutes = require("./routes/requestRoutes");
//2.Instatiations
const app = express();
const port = 3000;

//3.Configurations
app.set("view engine", "pug") // set pug as the view engine
app.set('views', path.join(__dirname,'views')); // specofy the folder containing the frontend files

//4.Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//for non existence routes

// Simple time request logger// monitors every single route since it has no specific command
// app.use((req, res, next) => {
//     console.log("A new request recieved at" + Date.now());
//     next();
// });

app.use("/about", (req, res, next) => { //monitors a specific route about
    console.log("A new request recieved at" + Date.now());
    next();
});

// app.use(express.urlencoded({ extended: false}));

// app.use(express.static(path.join(__dirname, 'public')));

//5.Use Imported Routes

app.use("/study", studyRoutes);
app.use("/", indexRoutes);
app.use("/", chicksRoutes);
app.use("/", youthfarmerRoutes);
app.use("/", salesagentRoutes);
app.use("/", requestRoutes);

//understanding how to serve  html files on the web browser using a route
// router.get("/chicks", (req, res) => {
//     res.sendFile(__dirname + "/views/html/chicks.html");
// });


//always above the server
//for non existence routes
app.use((req, res) => {
    res.status(404).send("Oops! Route not Found.");
});

//6.Bootsrapping the server
//Start the server  
// always the last line in this file
app.listen(port, () => {
    console.log('Server is running on port ${port}');
});