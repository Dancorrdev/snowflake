const express = require("express");
const app = express();
const faker = require("faker");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "Pijama",
    price: 65000,
  });
});

app.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("No Hay Parametros");
  }
});

app.listen(port, () => {
  console.log("mi puerto", port);
});
