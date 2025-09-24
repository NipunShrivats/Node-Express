import express from "express";
import { PORT } from "./env.js";
import path from "path";
const app = express();

// for using static files (a middleware)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // for POST
// app.use(express.urlencoded()); // for POST

// console.log("import.meta.dirname:", import.meta.dirname);
// console.log("import.meta.url:", import.meta.url);
// const __filename = new URL(import.meta.url);
// console.log(__filename.pathname);

const homePage = path.join(import.meta.dirname, "public/index.html");
const errorPage = path.join(import.meta.dirname, "views/404.html");
console.log(homePage);
app.get("/", (req, res) => {
  res.sendFile(homePage);
});

// -------- route Params ---------
// app.get("/profile/:title", (req, res) => {
//   console.log(req.params);
//   res.send(`<h1>This book is ${req.params.title}</h1>`);
// });
// app.get("/profile/:title/article/:username", (req, res) => {
//   console.log(req.params);
//   const formatedTitle = req.params.title.replace(/-/g, " ");
//   res.send(`<h1>This book is ${formatedTitle} by ${req.params.username}</h1>`);
// });

// // --------- query params (can use in searching) ---------
// // example:- "http://localhost:8001/product?search=Samsung%20S24&limit=10"
// app.get("/product", (req, res) => {
//   console.log(req.query);
//   res.send(`<h1>User is searching for ${req.query.search}</h1>`);
// });

// --------- form submission ---------
// not correct
// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.redirect("/");
//   // res.send("OK");
// });

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use((req, res) => {
  // return res.status(404).send("<h1>page not found<h1/>");
  return res.status(404).sendFile(errorPage);
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
