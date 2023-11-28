const { model, Schema } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  tags: {
    type: [String],
  },
  upvoteCount: {
    type: Number,
  },
  downvoteCount: {
    type: Number,
  },
  timestamp: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  longDescription: {
    type: String,
  },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
