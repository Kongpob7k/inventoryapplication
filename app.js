require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();
const keyboardRoute = require("./routes/MainRoute")
const PORT = process.env.PORT || 3000;

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

app.use("/",keyboardRoute);

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})