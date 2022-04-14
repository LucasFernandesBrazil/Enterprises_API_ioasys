import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ioasys:SRKEbwDmmVLFkUxh@cluster0.kg0gf.mongodb.net/enterprise");

let db = mongoose.connection;

export default db;
