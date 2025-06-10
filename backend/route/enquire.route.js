// import express from "express";
// import {enquire} from "../controller/enquire.controller.js";
// const router = express.Router();

// router.post("/enquire", enquire);

// export default router; 

import express from "express";
import { enquire } from "../controller/enquire.controller.js";
const router = express.Router();

router.post("/enquire", enquire);

export default router;