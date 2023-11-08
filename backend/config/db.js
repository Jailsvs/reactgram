const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.mbc8dst.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`);
    console.log("Conectado ao banco de dados Mongo Atlas DB");
    return dbConn;
  } catch (error) {
    console.log("Erro de conexão mongoose", error);
  }
};

conn();

module.exports = conn;