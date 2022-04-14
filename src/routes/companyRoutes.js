import express from "express";
import CompanyController from "../controllers/companyController.js";

const router = express.Router();

router
  .get("/companys", CompanyController.companysList)
  .get("/companys/:id", CompanyController.companyListByID)
  .post("/companys", CompanyController.companyRegister)
  .put("/companys/:id", CompanyController.companyUpdate)
  .delete("/companys/:id", CompanyController.companyDelete);

export default router;
