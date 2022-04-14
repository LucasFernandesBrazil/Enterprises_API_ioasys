import express from "express";
import companys from "../models/Company.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Ok")
    })

    app.use(
        express.json(),
        companys
    )
}

export default routes;
