import mongoose from "mongoose";

const departmentchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  empresa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companys",
    required: true,
  }
});

const departments = mongoose.model("departments", departmentchema);

export default departments;
