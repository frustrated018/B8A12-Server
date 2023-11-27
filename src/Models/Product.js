const { model, Schema } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  upvoteCount: {
    type: Number,
    required: true,
  },
  downvoteCount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  // tags: {
  //   type: [String],
  //   default: [],
  // },
});


const Product = model("Product", ProductSchema);

module.exports = Product;
