const User = require("../../../../Models/UserSchema");

const verificationStatusUpdate = async (req, res) => {
  const { email } = req.params;
  const { verificationStatus } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update verification status
    user.verificationStatus = verificationStatus || "unverified";

    // Save the updated user
    await user.save();

    // Respond with the updated user
    res.status(200).json({
      message: "Verification status updated successfully",
      updatedStatusCount: 1,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = verificationStatusUpdate;
