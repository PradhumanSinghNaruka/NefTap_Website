import express from "express";
import {google} from "../controller/google.controller.js";
const router = express.Router();
router.post("/google", google);

export default router;