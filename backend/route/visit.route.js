import express from "express";
import { visit, getVisitCount } from "../controller/visit.controller.js"

const router = express.Router();

router.post("/visit", visit);
router.get("/visit/count/:userid", getVisitCount);

export default router; 
