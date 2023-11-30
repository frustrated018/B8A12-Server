require("dotenv").config();

const config = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT,
  CLIENT_ONE: process.env.CLIENT_ONE,
  CLIENT_TWO: process.env.CLIENT_TWO,
};

module.exports = config;