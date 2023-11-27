const cors = require('cors');
const express = require("express");
const { LOCAL_CLIENT, CLIENT } = require('../config/default');

const applyMiddlewares=(app)=>{
    app.use(
        cors({
          origin: [
            LOCAL_CLIENT,
            CLIENT
          ],
          credentials: true,
        })
      );
      app.use(express.json());
    //TODO: Not using cookie Parser right now because I don't know how I will send the JWT data
    // if you use Cookins don't forget to install cookie parser
}

module.exports = applyMiddlewares