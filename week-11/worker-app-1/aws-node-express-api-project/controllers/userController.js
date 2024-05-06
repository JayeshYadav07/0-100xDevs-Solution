const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const z = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET;

const signupSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
});
async function signupUser(req, res) {
    const { username, email, password } = req.body;

    const validate = signupSchema.safeParse(req.body);
    if (!validate.success) return res.status(400).send({ msg: validate.error });

    const existingUser = await prisma.user.findFirst({
        where: {
            email,
        },
    });
    if (existingUser) {
        return res.status(409).send({ msg: "Email already present" });
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        },
    });

    res.status(201).send({
        msg: "User created successfully",
        newUser,
    });
}
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
async function loginUser(req, res) {
    const validate = loginSchema.safeParse(req.body);
    if (!validate.success) return res.status(400).send({ msg: validate.error });

    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
        where: {
            email,
        },
    });

    if (!user) return res.status(404).send({ msg: "User not found" });

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).send({ msg: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1d",
    });
    res.status(200).send({
        msg: "User logged in successfully",
        user: { username: user.username, token },
    });
}
module.exports = {
    signupUser,
    loginUser,
};
