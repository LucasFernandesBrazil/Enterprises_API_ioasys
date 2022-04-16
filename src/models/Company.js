import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  CNPJ: { type: String, required: true }
});

const companys = mongoose.model("companys", companySchema);

export default companys;
