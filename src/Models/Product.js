const { model, Schema } = require("mongoose");

// TODO: In this schema i didn't add the productId and tags 
// I want to generate unique productId from mongoDB
// Don't know how to do the tags  

const ProductSchema = new Schema({
  "name": {
    type: String,
    required: true,
  },
  "image": {
    type: String,
    required: true,
  },
  "upvoteCount": {
      type: Number,
      required: true,
    },
    "downvoteCount": {
        type: Number,
        required: true,
    },
    "timestamp": {
      type: Date,
      required: true,
    },
    "shortDescription": {
      type: String,
      required: true,
    },
    "longDescription": {
      type: String,
      required: true,
    },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
