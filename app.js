import express from "express";
import { PORT } from "./env.js";
import path from "path";
const app = express();

// for using static files (a middleware)
app.use(express.static("public"));

// console.log("import.meta.dirname:", import.meta.dirname);
// console.log("import.meta.url:", import.meta.url);
// const __filename = new URL(import.meta.url);
// console.log(__filename.pathname);

const homePage = path.join(import.meta.dirname, "public/index.html");
console.log(homePage);
app.get("/", (req, res) => {
  res.sendFile(homePage);
});

// -------- route Params ---------
app.get("/profile/:title", (req, res) => {
  console.log(req.params);
  res.send(`<h1>This book is ${req.params.title}</h1>`);
});
app.get("/profile/:title/article/:username", (req, res) => {
  console.log(req.params);
  const formatedTitle = req.params.title.replace(/-/g, " ");
  res.send(`<h1>This book is ${formatedTitle} by ${req.params.username}</h1>`);
});
// query params

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
