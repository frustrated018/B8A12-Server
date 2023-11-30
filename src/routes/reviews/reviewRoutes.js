const Review = require("../../Models/reviewSchema");
const router = require("express").Router();

// Get reviews by product ID
router.get("/findbyproductId/:productId", async (req, res) => {
  const productId = req.params.productId;

  try {
    const reviews = await Review.find({ productId: productId });

    if (reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for the specified product ID." });
    }

    res.send(reviews);
  } catch (error) {
    console.error("Error retrieving reviews by product ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const result = await Review.find();
    res.send(result);
  } catch (error) {
    console.error("Error retrieving all reviews:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// MAJROR ISSUE: When same user Tries to post a diffenet review to a different product it still blocks them

// Add a new review
router.post("/addreview", async (req, res) => {
  const { newReview: reviewData } = req.body;
  try {
    const newReview = new Review(reviewData);

    const savedReview = await newReview.save();

    res.status(201).send({ message: "Review Added", reviewCount: 1 });
  } catch (error) {
    console.error("Error adding a new review:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
