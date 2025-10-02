import express from "express";
const app = express();

const requestTime = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} from ${req.method} to ${req.url}`);
  next();
};

app.use(requestTime);

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
