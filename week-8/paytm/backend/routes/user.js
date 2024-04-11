const express = require("express");
const z = require("zod");
const UserModel = require("../models/UserModel");
const AccountModel = require("../models/AccountModel");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authMiddleware = require("../middleware/authMiddleware");

const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET;

router.get("/", (req, res) => {
    res.send("This is the user request");
});

//1. Signup
// Method: POST
// Route: /api/v1/user/signup
// Body:
// {
// 	username: "name@gmail.com",
// 	firstName: "name",
// 	lastName: "name",
// 	password: "123456"
// }

const signupBody = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string(),
});
router.post("/signup", async (req, res) => {
    const { username, firstName, lastName, password } = req.body;

    const { success } = signupBody.safeParse(req.body);
    if (!success) return res.status(400).send({ msg: "Invalid Data" });

    const existingUser = await UserModel.findOne({
        username: username,
    });
    if (existingUser) {
        return res.status(409).send({ msg: "username already present" });
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    const newUser = await UserModel.create({
        username,
        firstName,
        lastName,
        password: hashedPassword,
    });

    const account = await AccountModel.create({
        userId: newUser._id,
        balance: Math.round(Math.random() * 10000) + 1,
    });

    res.status(201).send({
        msg: "User created successfully",
        userId: newUser._id,
    });
});

// 2. Sign in
// Method: POST
// Route: /api/v1/user/signin
// Body:
// {
// 	username: "name@gmail.com",
// 	password: "123456"
// }

const signinBody = z.object({
    username: z.string().email(),
    password: z.string(),
});
router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) return res.status(400).send({ msg: "Invalid Data" });

    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) return res.status(404).send({ msg: "User not found" });

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).send({ msg: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1d",
    });
    res.status(200).send({
        msg: "User logged in successfully",
        user: { firstName: user.firstName, token },
    });
});

// Method: PUT
// Route: /api/v1/user
// Body:
// {
// 	password: "new_password",
// 	firstName: "updated_first_name",
// 	lastName: "updated_first_name",
// }
const updateBody = z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});
router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if (!success) return res.status(400).send({ msg: "Invalid Data" });

    if (req.body.password) {
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
        req.body.password = hashedPassword;
    }
    const userId = req.userId;
    try {
        await UserModel.findByIdAndUpdate(userId, req.body);
        res.json({
            message: "Updated successfully",
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
});

// Method: GET
// Route: /api/v1/user/bulk
// Query Parameter: ?filter=harkirat
// Response:
// Status code - 200
// {
// 	users: [{
// 		firstName: "",
// 		lastName: "",
// 		_id: "id of the user"
// 	}]
// }

router.get("/bulk", authMiddleware, async (req, res) => {
    try {
        const filter = req.query.filter;
        if (filter) {
            query = {
                _id: { $ne: req.userId },
                $or: [
                    { firstName: { $regex: filter, $options: "i" } },
                    { lastName: { $regex: filter, $options: "i" } },
                ],
            };
        } else {
            query = { _id: { $ne: req.userId } };
        }
        const users = await UserModel.find(query).limit(5);
        res.send({
            user: users.map((user) => {
                return {
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    _id: user._id,
                };
            }),
        });
    } catch (error) {
        res.send({
            msg: "Something Went Wrong... ",
        });
    }
});
module.exports = router;
