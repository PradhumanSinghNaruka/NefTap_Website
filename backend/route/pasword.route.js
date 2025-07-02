import { Router } from "express";
import updatePassword from "../controller/password.controller.js";

const router = Router();

router.post("/update", updatePassword);

export default router;
