import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const app = express();
const port = 3000;

// setting the view engine as ejs.
app.set("view engine", "ejs");

// settimg my UI folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("views", path.join(__dirname, "views"));
console.log(path.join(__dirname, "views"));

const products = [
  { id: 1, title: "product 1" },
  { id: 2, title: "product 2" },
  { id: 3, title: "product 3" },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", products });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
