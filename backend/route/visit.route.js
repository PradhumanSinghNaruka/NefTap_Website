import express from "express";
const router = express.Router();
import visitController from '../controller/visit.controller.js';

router.post('/visit/:userid', visitController.incrementVisit);

router.get('/visit/:userid', visitController.getVisitCount);

module.exports = router;
