import express from "express";
import { incrementVisit, getVisitCount } from "../controller/visit.controller.js";

const router = express.Router();

router.post('/visit/:userid', incrementVisit);
router.get('/visit/:userid', getVisitCount); // keep same endpoint in frontend

export default router;
