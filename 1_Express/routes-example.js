import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to home page</h1>");
});

app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "product1",
    },
    {
      id: 2,
      label: "product2",
    },
    {
      id: 3,
      label: "product3",
    },
  ];
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  console.log(req.params);
  const productId = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      label: "product1",
    },
    {
      id: 2,
      label: "product2",
    },
    {
      id: 3,
      label: "product3",
    },
  ];
  const getSingleProduct = products.find((product) => product.id === productId);
  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).send("product not found");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
