import app from "./src/app.js"; 

const PORT = 3000;// Porta de comunicação utilizada em nossa API, 3000 é um uso padrão de portas. 

app.listen(PORT, () => {
  console.log("Server Online"); 
});