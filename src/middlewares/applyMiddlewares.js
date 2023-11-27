const cors = require('cors');
const express = require("express");

const applyMiddlewares=(app)=>{
    app.use(
        cors({
          origin: [
            "http://localhost:5173",
          ],
          credentials: true,
        })
      );
      app.use(express.json());
    //TODO: Not using cookie Parser right now because I don't know how I will send the JWT data
}

module.exports = applyMiddlewares