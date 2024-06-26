import mongoose from "mongoose"; 

async function conectaNaDataBase(){

  mongoose.connect("mongodb+srv://admin:uscs2024@cluster0.9ovlrlr.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

  return mongoose.connection; 
};

export default conectaNaDataBase;