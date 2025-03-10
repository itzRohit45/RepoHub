const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/allUsers", userController.getAllUsers);
userRouter.get("/userProfile/:id", userController.getUserProfile);
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.put("/updateProfile/:id", userController.updateUserProfile);
userRouter.delete("/deleteProfile/:id", userController.deleteUserProfile);

module.exports = userRouter;
