const User = require("../../../../Models/UserSchema");

const checkRole = async (req, res) => {
  try {
    // Get the user ID from the request parameters
    const userId = req.params.id;

    // Get the user email from the request parameters
    const userEmail = req.params.email;

    // Find the user by email
    const user = await User.findOne({ email: userEmail });

    // Extract the role from the user object
    const userRole = user.role;

    // Check user role and send appropriate response
    if (userRole === "admin") {
      return res.status(200).send({ role: "admin" });
    } else if (userRole === "moderator") {
      return res.status(200).send({ role: "moderator" });
    } else {
      return res.status(200).send({ role: "user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = checkRole;
