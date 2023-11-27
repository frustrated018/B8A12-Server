const express = require("express");
const applyMiddlewares = require("./middlewares/applyMiddlewares");
require("dotenv").config;
const app = express();
const port = process.env.PORT || 5000;

// Applying middlewares
applyMiddlewares(app);

app.get("/health", (req, res) => {
  res.send("Tech trends is predicting trends....");
});

app.listen(port, () => {
  console.log(`Tech treds server is running on port ${port}`);
});
