import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
