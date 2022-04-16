import express from "express";
import departmentRoutes from "./departmentRoutes.js";
import companyRoutes from "./companyRoutes.js";
import employeeRoutes from "./employeeRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ message: "Ok" });
  });

  app.use(express.json(), companyRoutes, employeeRoutes, departmentRoutes);
};

export default routes;
