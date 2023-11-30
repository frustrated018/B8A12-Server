const cors = require("cors");
const express = require("express");
const { LOCAL_CLIENT, CLIENT_ONE, CLIENT_TWO } = require("../config/default");

const applyMiddlewares = (app) => {
  app.use(
    cors({
      origin: [LOCAL_CLIENT, CLIENT_ONE, CLIENT_TWO],
    })
  );
  app.use(express.json());
};

module.exports = applyMiddlewares;