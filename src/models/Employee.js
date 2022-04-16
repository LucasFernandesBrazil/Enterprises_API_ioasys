import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
    CPF: { type: String },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "departments",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const employees = mongoose.model("employees", employeeSchema);

export default employees;
