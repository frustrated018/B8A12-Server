const mongoose = require("mongoose");
require("dotenv").config();

const getConnectionString = () => {
  let connectionURI;

  if (process.env.NODE_ENV) {
    connectionURI = process.env.LOCAL_DATABASE_URI.replace(
      "<username>",
      process.env.LOCAL_DATABASE_USERNAME
    );
    connectionURI = connectionURI.replace(
      "<password>",
      process.env.LOCAL_DATABASE_PASSWORD
    );
  } else {
    connectionURI = process.env.PROD_DATABASE_URI;
  }
  return connectionURI;
};

const connectDB = async () => {
  console.log("connecting to DB");
  const uri = getConnectionString();
  await mongoose.connect(uri, { dbName: process.env.DB_NAME });
  console.log("Connected to DB");
};

module.exports = connectDB;
