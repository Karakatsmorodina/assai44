const express = require("express");
const path= require ("path");
const router = express.Router();
const ejs=require('ejs')
const app=express();
const https = require("https");

app.use(express.static('css'))

router
    .route("/")
    .get((req, res) => res.render(path.resolve("./views/index new.ejs")))

    .post((req, res) => res.send("POST AUTO"));
module.exports = router;