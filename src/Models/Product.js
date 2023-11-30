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
  productId: {
    type: String,
    required: true,
    unique: true,
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
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  externalLinks: {
    type: [String],
  },
  productOwner: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  reportedStatus: {
    type: String,
    default: "not reported",
  },
  featuredStatus: {
    type: String,
    default: "not featured",
  },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
