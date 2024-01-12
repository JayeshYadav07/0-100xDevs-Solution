const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
    try {
        let { username, password } = req.body;
        const result = await User.insertMany({ username, password });
        res.status(200).send({ msg: "User created successfully" });
    } catch (error) {
        res.status(404).send({ error: "Something went wrong!" });
    }
});

router.get("/courses", async (req, res) => {
    try {
        const result = await Course.find();
        res.status(200).send({ result });
    } catch (error) {
        res.status(404).send({ error: "Something went wrong!" });
    }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const userId = req.body.id;
        const user = await User.findById(userId);
        if (!user.purchasedCourses.includes(courseId)) {
            const result = await User.findByIdAndUpdate(
                userId,
                {
                    $push: {
                        purchasedCourses: courseId,
                    },
                },
                { new: true }
            );
            res.send({ msg: "Course added successfully", result });
        } else {
            res.send({ msg: "Course is already purchased by the user." });
        }
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    try {
        const { id } = req.body;
        const result = await User.find({ _id: id }).populate(
            "purchasedCourses"
        );
        res.send({ result });
    } catch (error) {
        res.status(404).send({ error: "Something went wrong!" });
    }
});

module.exports = router;
