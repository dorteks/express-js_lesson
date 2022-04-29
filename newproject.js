//newproject.js
//newviews

const express = require("express");
const res = require("express/lib/response");
const { home } = require("nodemon/lib/utils");

const project = express();

project.set("view engine", "ejs");
project.set("views", "newviews");

project.get("/", (req, res) => {
  res.render("home");
});

project.get("/home", (req, res) => {
  res.redirect("/");
});

project.get("/contact", (req, res) => {
  res.render("contact");
});

project.get("/about-us", (req, res) => {
  res.render("about");
});

project.get("/accountcreate", (req, res) => {
  res.render("create");
});

project.use((req, res) => {
  res.render("404");
});

project.listen(5000);
