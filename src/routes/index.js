import express from "express";
import livros from "./livroRoutes.js"
import usuario from "./usuarioRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Livraria para API-REST em JS e Mongodb"));

  app.use(express.json(), livros, usuario) //Middleware para acessar respostas e requisições e alterar elas 
}; 

export default routes; 