import express from "express";
import companyController from "../controllers/companyController.js";

const router = express.Router();

router.get("/companys", companyController.companysList)

export default router;
