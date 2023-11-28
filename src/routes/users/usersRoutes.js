const addNewUser = require("../../api/v1/users/controllers/addNewUser");
const deleteUser = require("../../api/v1/users/controllers/deleteUser");
const getAllUsers = require("../../api/v1/users/controllers/getAllUsers");
const makeAdmin = require("../../api/v1/users/controllers/makeAdmin");
const verifyToken = require("../../middlewares/verifyToken");
const User = require("../../Models/UserSchema");
const { ObjectId } = require("mongoose").Types;

const router = require("express").Router();
// get all the users in /users route
router.get("/", verifyToken, getAllUsers);

// Add a new user
router.post("/add", verifyToken, addNewUser);

// Delete User
router.delete("/delete/:id", verifyToken, deleteUser);

// set Role for user [Make Admin]
router.patch("/makeadmin/:id", verifyToken, makeAdmin);

module.exports = router;
