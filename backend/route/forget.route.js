import express from "express";
import { checkEmail } from "../controller/forget.controller.js"; 

const router = express.Router();

router.post("/check-email", checkEmail);

export default router;
