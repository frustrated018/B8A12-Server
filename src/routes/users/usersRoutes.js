const addNewUser = require("../../api/v1/users/controllers/addNewUser");
const checkAdmin = require("../../api/v1/users/controllers/checkAdmin");
const checkRole = require("../../api/v1/users/controllers/CheckRole");
const deleteUser = require("../../api/v1/users/controllers/deleteUser");
const getAllUsers = require("../../api/v1/users/controllers/getAllUsers");
const makeAdmin = require("../../api/v1/users/controllers/makeAdmin");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");
const User = require("../../Models/UserSchema");
const { ObjectId } = require("mongoose").Types;

const router = require("express").Router();
// get all the users in /users route
router.get("/", verifyToken, verifyAdmin, getAllUsers);

// Add a new user
router.post("/add", verifyToken, addNewUser);

// Delete User
router.delete("/delete/:id", verifyToken, verifyAdmin, deleteUser);

// Checking Users role
router.get("/checkrole/:email", verifyToken, checkRole);

// set Role for user [Make Admin]
router.patch("/makeadmin/:id", verifyToken, verifyAdmin, makeAdmin);

module.exports = router;
