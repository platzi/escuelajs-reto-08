const config = require("../config/index");
const express = require("express");
const path = require("path");
const app = express();
const port = config.port;
const ProductServices = require("./services/products");
const router = express.Router();
const productService = new ProductServices();

app.get("/", (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get("/receipts", (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get("/products", (req, res) => {
  let storeProducts = "";
  res.json(storeProducts);
});

app.use("/api/products", router);

router.get("/", async (request, response, next) => {
  try {
    const products = await productService.getProducts();
    response.status(200).json({
      data: products,
      message: "Products listed"
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:productId", async (request, response, next) => {
  try {
    const product = await productService.getProduct();
    response.status(200).json({
      data: product,
      message: "Product retrieved"
    });
  } catch (error) {
    next(error);
  }
});
router.post("/", async (request, response, next) => {
  const { body: product } = request;
  try {
    const productId = await productService.createProduct({ product });
    response.status(201).json({
      data: productId,
      message: "Product created"
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:productId", async (request, response, next) => {
  const { body: newProduct } = request;
  const { productId } = request.params;
  try {
    const product = await productService.updateProduct({
      newProduct,
      productId
    });
    response.status(200).json({
      data: product,
      message: "Product updated"
    });
  } catch (error) {
    next(error);
  }
});
router.delete("/:productId", async (request, response, next) => {
  const { productId } = request.params;
  try {
    const product = await productService.deleteProduct(productId);
    response.status(200).json({
      data: product,
      message: "Product deleted"
    });
  } catch (error) {
    next(error);
  }
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
