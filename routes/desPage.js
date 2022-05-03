const express = require("express");
const path= require ("path");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(path.resolve("./views/desPage.ejs")))

    .post((req, res) => res.send("POST AUTO"));
module.exports = router;