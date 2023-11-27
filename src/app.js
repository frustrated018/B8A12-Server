const express = require("express");
const applyMiddlewares = require("./middlewares/applyMiddlewares");
const connectDB = require("./DB/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Applying middlewares
applyMiddlewares(app);

// Products route
const productRoutes = require("./routes/products/ProductRoutes");
app.use("/products", productRoutes);

// this is not working getting "Cannot GET /products" this error

app.get("/health", (req, res) => {
  res.send("Tech trends is predicting trends....");
});

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Tech trends server is running on port ${port}`);
  });
};

main();
