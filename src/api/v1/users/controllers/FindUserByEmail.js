const User = require("../../../../Models/UserSchema");

const FindUserByEmail = async (req, res) => {
  try {
    // Extract email from the request parameters
    const { email } = req.params;

    // Find the user by email in the database
    const user = await User.findOne({ email });
    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user information
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = FindUserByEmail;
