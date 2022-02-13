const mongoose = require("mongoose")

// conexão com o banco de dados
async function main() {
    await mongoose.connect(process.env.MONGODB_URI)
}

// se der certo ou errado haverá um aviso
main()
.then(() => console.log("Conectando ao Mongo"))
.catch(() => console.log("Deu erro"))

module.exports = mongoose