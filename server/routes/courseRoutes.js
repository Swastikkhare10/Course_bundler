import express from "express"
import { addLecture, createCourse, getAllCourses } from "../controllers/courseController.js";
import {getCourseLectures } from "../controllers/userController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Get all courses without lectures
router.route("/courses").get(getAllCourses);

// create new course - only admin
router.route("/createCourse").post(isAuthenticated, authorizeAdmin, singleUpload ,createCourse);

// Add lecture, delete course, get course details 
router.route("/course/:id").get(getCourseLectures).post(singleUpload, addLecture);

// delete lecture
export default router;