import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import expressJWT from "express-jwt";
import jwt from "jsonwebtoken";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();
// app.use(expressJWT({ secret: 'teste' }).unless({ path: ['/']}))
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
routes(app);

export default app;
