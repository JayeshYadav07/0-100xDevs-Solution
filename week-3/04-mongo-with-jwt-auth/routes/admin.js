const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index.js");
const router = Router();
const JWT_SECRET = "@jwt-secret123";
// Admin Routes
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        const isAdminPresent = await Admin.findOne({ username: username });
        if (isAdminPresent) {
            res.status(404).send({ msg: "Admin already exists" });
            return;
        } else {
            const admin = new Admin({ username, password });
            await admin.save();
            res.status(200).send({ msg: "Admin added successfully" });
        }
    } catch (error) {
        res.status(404).send({ msg: error.message });
    }
});

router.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body;
        const isValidCredentials = await Admin.findOne({ username, password });
        if (isValidCredentials) {
            const token = jwt.sign(
                { userId: isValidCredentials._id },
                JWT_SECRET
            );
            res.send({
                msg: "User logged in successfully",
                token,
            });
        } else {
            res.status(403).send({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(404).send({ msg: error.message });
    }
});

router.post("/courses", adminMiddleware, async (req, res) => {
    try {
        const { title, description } = req.body;
        const course = new Course({
            title,
            description,
            createdBy: req.body.id,
        });
        await course.save();
        res.send(course);
    } catch (error) {
        res.status(404).send({ msg: error.message });
    }
});

router.get("/courses", adminMiddleware, async (req, res) => {
    try {
        const courses = await Course.find({ createdBy: req.body.id });
        res.send(courses);
    } catch (error) {
        res.status(404).send({ msg: error.message });
    }
});

module.exports = router;
