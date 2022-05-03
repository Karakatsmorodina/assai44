const express = require("express")
const bodyparser=require('body-parser')
const ejs=require('ejs')
const https=require('https')
const port = 63342;
const app = express();

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static('public'))

app.use("/", require("./routes/index new"));
app.use("/shop", require("./routes/shop"));
app.use("/m", require("./routes/m"));
app.use("/f", require("./routes/f"));
app.use("/cart", require("./routes/cart"));
app.use("/cakePage", require("./routes/cakePage"));
app.use("/cupPage", require("./routes/cakePage"));
app.use("/desPage", require("./routes/cakePage"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
