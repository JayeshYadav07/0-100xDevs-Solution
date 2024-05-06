const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
    getPosts,
    createPost,
    deletePost,
} = require("../controllers/postController");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        msg: "Post API!",
    });
});
router.get("/all-post", getPosts);
router.post("/add", authMiddleware, createPost);
router.delete("/delete/:id", authMiddleware, deletePost);
module.exports = router;
