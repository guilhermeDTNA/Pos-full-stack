import express from 'express';
let router = express.Router();

import userController from './UserController';
import courseController from './CourseController';
import teacherController from './TeacherController';
import evaluationController from './EvaluationController';

router.get("/", function(req, res){
    console.log("Oi!");
    res.status(200).json({ message: "oi!" });
})

router.use("/", userController);
router.use("/", teacherController);
router.use("/", courseController);
router.use("/", evaluationController);

export default router;