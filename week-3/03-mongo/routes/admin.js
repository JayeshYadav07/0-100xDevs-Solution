const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
// Admin Routes
router.post("/signup", async (req, res) => {
    try {
        let { username, password } = req.body;
        const result = await Admin.insertMany({ username, password });
        res.status(200).send({ msg: "Admin created successfully" });
    } catch (error) {
        res.status(404).send({ error: "Something went wrong!" });
    }
});

router.post("/courses", adminMiddleware, async (req, res) => {
    try {
        const { id, title, description } = req.body;
        const result = await Course.insertMany({
            title,
            description,
            createdBy: id,
        });
        res.send({ result });
    } catch (error) {
        res.status(404).send({ error: "Something went wrong!" });
    }
});

router.get("/courses", adminMiddleware, async (req, res) => {
    try {
        const { id } = req.body;
        const result = await Course.find({ createdBy: id });
        res.send({ result });
    } catch (error) {
        res.status(404).send({ error: "Something went wrong!" });
    }
});
module.exports = router;
