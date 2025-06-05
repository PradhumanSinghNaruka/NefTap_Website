import express from "express";
import { userdetail, getUserByEmail, updateUserDetail, getPublicUserProfile } from "../controller/userdetail.controller.js";

const router = express.Router();

router.post("/userdetail", userdetail); // Create or Update
router.get("/userdetail/:email", getUserByEmail); // Fetch user by email
router.put("/userdetail/:profileId", updateUserDetail); //update user profile

// Public profile accessible by ID without auth
router.get("/profile/public/:id", getPublicUserProfile);


export default router; 
