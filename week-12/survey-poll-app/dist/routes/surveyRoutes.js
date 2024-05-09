"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const surveyController_1 = __importDefault(require("../controllers/surveyController"));
const router = express_1.default.Router();
router.get("/welcome", surveyController_1.default.welcome);
// GET /surveys: Fetch all surveys.
router.get("/", surveyController_1.default.getAll);
// POST /surveys: Create a new survey.
router.post("/", surveyController_1.default.create);
// GET /surveys/:id: Fetch a specific survey.
router.get("/:id", surveyController_1.default.get);
// PUT /surveys/:id: Update a specific survey.
router.put("/:id", surveyController_1.default.update);
// DELETE /surveys/:id: Delete a specific survey.
router.delete("/:id", surveyController_1.default.remove);
exports.default = router;
