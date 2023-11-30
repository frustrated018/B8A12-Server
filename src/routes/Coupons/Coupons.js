const Coupon = require("../../Models/CouponSchema");
const router = require("express").Router();

// Route to get all coupons
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update coupon by id
router.put("/updatecoupon/:id", async (req, res) => {
  const couponId = req.params.id;

  try {
    // Find the coupon by ID
    const existingCoupon = await Coupon.findById(couponId);

    if (!existingCoupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }

    // Extract updated coupon data from the request body
    const updatedCouponData = req.body.coupon;

    // Update the coupon fields
    existingCoupon.offerAmount = updatedCouponData.offerAmount;
    existingCoupon.message = updatedCouponData.message;

    // Save the updated coupon
    await existingCoupon.save();

    // Respond with success
    res
      .status(200)
      .json({ message: "Coupon updated successfully", modifiedCount: 1 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route to get a coupon by ID
router.get("/findbyid/:id", async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }

    res.json(coupon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
