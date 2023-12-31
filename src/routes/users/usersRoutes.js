const addNewUser = require("../../api/v1/users/controllers/addNewUser");
const checkRole = require("../../api/v1/users/controllers/CheckRole");
const deleteUser = require("../../api/v1/users/controllers/deleteUser");
const FindUserByEmail = require("../../api/v1/users/controllers/FindUserByEmail");
const getAllUsers = require("../../api/v1/users/controllers/getAllUsers");
const makeAdmin = require("../../api/v1/users/controllers/makeAdmin");
const makeModerator = require("../../api/v1/users/controllers/makeModerator");
const verificationStatusUpdate = require("../../api/v1/users/controllers/verificationStatusUpdate");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");
const User = require("../../Models/UserSchema");
const { ObjectId } = require("mongoose").Types;

const router = require("express").Router();
// get all the users in /users route
router.get("/", verifyToken, verifyAdmin, getAllUsers);

// Find user by email
router.get("/finduserbyemail/:email", FindUserByEmail); // something wrong with verify token in this

// Update user verification status by email
router.patch(
  "/updateverification/:email",
  verifyToken,
  verificationStatusUpdate
);

// Add a new user
router.post("/add", addNewUser);

// Delete User
router.delete("/delete/:id", verifyToken, verifyAdmin, deleteUser);

// Checking Users role
router.get("/checkrole/:email", verifyToken, checkRole);

// set Role for user [Make Admin]
router.patch("/makeadmin/:id", verifyToken, verifyAdmin, makeAdmin);

// set Role for user [Make Moderator]
router.patch("/makemoderator/:id", verifyToken, verifyAdmin, makeModerator);

module.exports = router;
