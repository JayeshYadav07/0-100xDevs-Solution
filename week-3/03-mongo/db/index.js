const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://jayesh:jayesh@cluster0.7bqqxwy.mongodb.net/100xDevsWeek3MongoCourseSelling"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: {
        type: "string",
        required: true,
        unique: true,
    },
    password: {
        type: "string",
        required: true,
    },
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: "string",
        unique: true,
        required: true,
    },
    password: {
        type: "string",
        required: true,
    },
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
});

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdBy: {
        ref: "Admin",
        type: mongoose.Schema.Types.ObjectId,
        required: true,
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
