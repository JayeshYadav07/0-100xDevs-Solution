import express from "express";
import userController from "../controllers/userController";
const router = express.Router();

router.get("/", userController.welcome);

export default router;
