import express from "express";
import surveyController from "../controllers/surveyController";

const router = express.Router();

router.get("/", surveyController.welcome);

export default router;
