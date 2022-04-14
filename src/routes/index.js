import express from "express";
import companyRoutes from "./companyRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: "Ok"})
    })

    app.use(
        express.json(),
        companyRoutes
    )
}

export default routes;
