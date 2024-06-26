import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId, require: true, index:true, unique:true,sparse:true},
  nome: {type: String, required: true},
  descricao: {type: String, required: false},
  preco: {type: Number, required: true},
  qtd_estoque: {type: Number, required: true},
  criado_em: {type: Date, required: true},
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;