const { model, Schema } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true, // Make the name a required field
  },
  image: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  upvoteCount: {
    type: Number,
    default: 0, 
  },
  downvoteCount: {
    type: Number,
    default: 0, 
  },
  timestamp: {
    type: Date,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  productStatus: {
    type: String,
    enum: ["pending", "approved", "rejected"], // Use an enum for productStatus to limit possible values
    default: "pending",
  },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
