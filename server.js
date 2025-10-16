const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const multer = require('multer');

const ejs=require("ejs");

const app = express();
const port = process.env.PORT||3000;
app.set("view engine ",ejs);
app.set('views', path.join(__dirname, 'views'));
app.set()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
//app.use(express.static(path.join(__dirname, 'public')));


// Root route to check server status
app.get('/', (req, res) => {
    res.render("chatbot.ejs");
});
app.get('/simulation', (req, res) => {
    res.render("simulation.ejs");
});
app.get('/armcontro',(req,res)=>{
    res.render("armcontro.ejs");
})
app.get('/aurdino',(req,res)=>{
    res.render("aurdino.ejs");
})





 

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
