const path = require("path");
const express  = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 9000;

// static path

const staticPath = path.join(__dirname, "../public");

const templatesPath = path.join(__dirname, "../src/templates/views");

const partialsPath  = path.join(__dirname, "../src/templates/partials");



app.set("view engine", "hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

//routing

app.get("/", (req, res) =>{
  res.render("index.hbs")
});

app.get("/about", (req, res) =>{
    res.render("about.hbs")
  });

  app.get("/weather", (req, res) =>{
    res.render("weather.hbs")
  });

  app.get("*", (req, res) =>{
    res.render("404error.hbs", {
    errormessage : "Oops ! Page not found."
    });
  });

app.listen(port, () =>{
    console.log("Its working fine.");
});

