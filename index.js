const express = require("express");

const app = express();

app.use(express.json());

const dataservice = require("./services/dataService");

app.get("/all-products/", (req, res) => {
  dataservice.getAllProducts().then((result) => {
    res.status(result.statusCode).json(result);
  });
});

app.post("/addProduct", (req, res) => {
  console.log(req.body);
  dataservice
    .addProduct(
      req.body.id,
      req.body.title,
      req.body.price,
      req.body.description,
      req.body.brand,
      req.body.image
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});

app.post("/UpdateProduct/", (req, res) => {
  console.log(req.body);
  dataservice
    .UpdateProduct(
      // req.params.id,
      req.body.id,
      req.body.title,
      req.body.price,
      req.body.description,
      req.body.brand,
      req.body.image
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});

app.delete("/deleteProduct/:id", (req, res) => {
  dataservice.deleteProduct(req.params.id).then((result) => {
    res.status(result.statusCode).json(result);
  });
});
app.listen(3000, () => {
  console.log("listening port 3000");
});
