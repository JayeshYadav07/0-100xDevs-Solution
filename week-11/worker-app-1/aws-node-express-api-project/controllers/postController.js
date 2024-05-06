const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const z = require("zod");

async function getPosts(req, res) {
    res.json({ msg: "Get all Posts" });
}

const postSchema = z.object({
    title: z.string(),
    userId: z.number(),
});

async function createPost(req, res) {
    const { title, userId } = req.body;
    const validate = postSchema.safeParse(req.body);
    if (!validate.success) return res.status(400).send({ msg: validate.error });

    const post = await prisma.post.create({
        data: {
            title,
            userId,
        },
    });
    res.send({
        msg: "Post created successfully!",
        post,
    });
}
async function deletePost(req, res) {
    const id = parseInt(req.params.id);
    const post = await prisma.post.delete({
        where: {
            id,
            userId: parseInt(req.body.userId),
        },
    });
    console.log(post);
    res.send({
        msg: "Post deleted successfully!",
        post,
    });
}

module.exports = {
    getPosts,
    createPost,
    deletePost,
};
