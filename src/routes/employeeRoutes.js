import express from "express";
import EmployeeController from "../controllers/employeeController.js";

const router = express.Router();

router
  .get("/employee", EmployeeController.employeeList)
  .get("/employee/:id", EmployeeController.employeeListByID)
  .post("/employee", EmployeeController.employeeRegister)
  .put("/employee/:id", EmployeeController.employeeUpdate)
  .delete("/employee/:id", EmployeeController.employeeDelete);

export default router;
