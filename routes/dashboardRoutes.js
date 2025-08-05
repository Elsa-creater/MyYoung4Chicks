const express = require("express");
const router = express.Router();
const path = require("path");

app.get('/dashboard/sales', (req, res) => {
    res.send('📊 Welcome, Sales Agent!');
  });
  
  app.get('/dashboard/farmer', (req, res) => {
    res.send('🌾 Welcome, Youth Farmer!');
  });
  
  app.get('/dashboard/brooder', (req, res) => {
    res.send('🐣 Welcome, Brooder Manager!');
  });