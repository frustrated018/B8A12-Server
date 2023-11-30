const { model, Schema } = require("mongoose");

const CouponSchema = new Schema({
  offerAmount: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Coupon = model("Coupon", CouponSchema);

module.exports = Coupon;
