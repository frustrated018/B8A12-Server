const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  review: {
    type: String,
    required: true,
  },
});

const Review = model("Review", ReviewSchema);

module.exports = Review;
