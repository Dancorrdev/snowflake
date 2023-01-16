const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get("/", (req, res) => {
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

router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Product Created",
    data: body,
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Product Updated",
    data: body,
    id,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Product Deleted",
    id,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "Pijama",
    price: 65000,
  });
});

module.exports = router;
