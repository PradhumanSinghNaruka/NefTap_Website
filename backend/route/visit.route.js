import express from "express";
import { trackVisit } from "../controllers/visit.controller.js";

const router = express.Router();

router.post("/visit", trackVisit);

export default router;
