// import express from "express";
// import {contactus} from "../controller/contactus.controller.js";
// const router = express.Router();

// router.post("/contactus", contactus);

// export default router;

import express from "express";
import { contactus } from "../controller/contactus.controller";
const router = express.Router();

router.post("/contactus", contactus);

export default router;