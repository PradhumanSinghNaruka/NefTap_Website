// import express from "express";
// import { userdetail, getUserByEmail, updateUserDetail, getPublicUserProfile } from "../controller/userdetail.controller.js";

// const router = express.Router();

// router.post("/userdetail", userdetail); // Create or Update
// router.get("/userdetail/:email", getUserByEmail); // Fetch user by email
// router.put("/userdetail/:profileId", updateUserDetail); //update user profile

// router.get("/profile/public/:id", getPublicUserProfile);


// export default router; 


import express from "express";
import {
  userdetail,
  updateUserDetail,
  getUserByEmail,
  getPublicUserProfile
} from "../controller/userdetail.controller.js";

const router = express.Router();

router.post("/userdetail", userdetail); // Create or Update
router.get("/userdetail/:email", getUserByEmail); // Fetch user by email
router.put("/userdetail/:profileId", updateUserDetail); // Update user profile
router.get("/profile/public/:id", getPublicUserProfile); // Public profile

export default router;
