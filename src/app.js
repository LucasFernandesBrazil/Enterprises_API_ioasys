import express from "express";
import db from "./config/dbConnect.js";
import companys from "./models/Company.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send("Ok");
});

app.get('/companys', (req, res) => {
  companys.find((err, companys) => {
    res.status(200).json(companys)
  })
})

export default app;
