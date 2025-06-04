import express from "express";
import { card } from "../controller/carddetail.controller.js";
const router = express.Router();

router.post("/card", card);

export default router; 