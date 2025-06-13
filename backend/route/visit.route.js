import express from "express";
import { visit } from "../controller/visit.controller.js";

const router = express.Router();

router.post("/visit", visit);

export default router;
