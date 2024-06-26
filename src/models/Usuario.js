import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId, require: true},
  nome: {type: String, required: true},
  email: {type: String, required: true},
  senha: {type: String, required: true},
  criado_em: {type: Date, required: true},
}, {versionKey: false});

const usuario = mongoose.model("usuarios", usuarioSchema);

export default usuario; 