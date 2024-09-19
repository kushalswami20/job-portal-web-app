import express from "express";
import { postJob, getAllJobs,getJobById,getAdminJobs } from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
//import { singleUpload } from "../middlewares/multer.js";
 
const router = express.Router();

router.post("/post",isAuthenticated,postJob);
router.get("/get",isAuthenticated,getAllJobs);
router.get("/get/:id",isAuthenticated,getJobById);
router.get("/getadminjobs",isAuthenticated,getAdminJobs);

export default router;
