const express = require("express");
require("dotenv").config;
const app = express();
const port = process.env.PORT || 5000;

app.get("/health", (req, res) => {
  res.send("Tech trends is predicting trends....");
});

app.listen(port, () => {
  console.log(`Tech treds server is running on port ${port}`);
});
