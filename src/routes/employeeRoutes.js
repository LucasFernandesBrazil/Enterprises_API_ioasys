import express from "express";
import EmployeeController from "../controllers/employeeController.js";

const router = express.Router();

router
  .get("/employees", EmployeeController.employeeList)
  .get("/employees/search", EmployeeController.listEmployeeByCompany)
  .get("/employees/:id", EmployeeController.employeeListByID)
  .post("/employees", EmployeeController.employeeRegister)
  .put("/employees/:id", EmployeeController.employeeUpdate)
  .delete("/employees/:id", EmployeeController.employeeDelete);

export default router;
