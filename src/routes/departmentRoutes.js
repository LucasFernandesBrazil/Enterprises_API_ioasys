import express from "express";
import departmentController from "../controllers/departmentController.js";

const router = express.Router();

router
  .get("/departments", departmentController.departmentList)
  .get("/departments/:id", departmentController.departmentListByID)
  .post("/departments", departmentController.departmentRegister)
  .put("/departments/:id", departmentController.departmentUpdate)
  .delete("/departments/:id", departmentController.departmentDelete);

export default router;
