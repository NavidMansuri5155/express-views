
const path = require("path")
const express = require("express");
const app = express();
const port = 3000;


app.use(express.static(__dirname + './public'))


app.set("view engine", "ejs")
app.set("views","views")


app.get("/home", (req, res) => {
    res.render("home")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/contact", (req, res) => {
    res.render("contact")
});

app.get("/location", (req, res) => {
    res.render("location")
});


app.get("*", (req, res) => {
    res.render("404")
});

app.listen(port, () => {
    console.log("my express server is working");
});





