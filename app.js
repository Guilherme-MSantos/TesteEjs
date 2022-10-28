const express = require("express");
const axios = require("axios");
const app = express();

const addNewPost = require("./api/Create");
const updatePost = require("./api/Update");
const deletePost = require("./api/Delete");

const url = "http://origam-exam-api.herokuapp.com/api/posts";

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// config ejs
app.set("view engine", "ejs");

// Rotas
app.get("/", (req, res) => {
  res.render("pages/index");
});

app.post("/create", (req, res) => {
  let title = req.body.title;

  addNewPost({
    title: title,
  });

  res.render("pages/index");
});
app.get("/read", (req, res) => {
  axios
    .get(url)
    .then((response) => {
      const dados = response.data;
      res.render("pages/read", { data: dados });
    })
    .catch((error) => console.error(error));
});

app.get("/updateform", (req, res) => {
  res.render("pages/updateform");
});

app.post("/update", (req, res) => {
  let id = req.body.id;
  let NewTitle = req.body.NewTitle;

  updatePost(
    {
      title: NewTitle,
    },
    id
  );
  res.redirect("/");
});
app.get("/deleteform", (req, res) => {
  res.render("pages/deleteform");
});

app.post("/delete", (req, res) => {
  let id = req.body.id;

  deletePost(id);
  res.redirect("/");
});

app.get("/style", (req, res) => {
  res.sendFile(__dirname + "/css/style.css");
});

app.listen(3000, (req, res) => {
  console.log("rodando na porta : http://localhost:3000");
});
