import express from "express";
import surveyController from "../controllers/surveyController";

const router = express.Router();

router.get("/welcome", surveyController.welcome);

// GET /surveys: Fetch all surveys.
router.get("/", surveyController.getAll);

// POST /surveys: Create a new survey.
router.post("/", surveyController.create);

// GET /surveys/:id: Fetch a specific survey.
router.get("/:id", surveyController.get);

// PUT /surveys/:id: Update a specific survey.
router.put("/:id", surveyController.update);

// DELETE /surveys/:id: Delete a specific survey.
router.delete("/:id", surveyController.remove);

export default router;
