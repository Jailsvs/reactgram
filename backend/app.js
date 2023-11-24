require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();
// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({credentials: true, origin: "http://localhost:3000"}));

/*app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});*/
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

require("./config/db.js");

app.get("/", (req, res) => {
  res.send("API Working!");
});

const router = require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})
