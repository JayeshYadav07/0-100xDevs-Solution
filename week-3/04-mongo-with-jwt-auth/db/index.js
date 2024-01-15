const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("your-mongodb-url/courseSelling");

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: "string",
    password: "string",
});

const UserSchema = new mongoose.Schema({
    username: "string",
    password: "string",
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "course",
        },
    ],
});

const CourseSchema = new mongoose.Schema({
    title: "string",
    description: "string",
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
    },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
};
