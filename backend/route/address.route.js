import express from "express";
import { address } from "../controller/address.controller.js";
const router = express.Router();
router.post("/address", address);
export default router;