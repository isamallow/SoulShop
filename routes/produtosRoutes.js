const { Router } = require("express");
const { paginaProdutos } = require("../controllers/ProdutoController");
const ProdutoController = require("../controllers/ProdutoController")
const multer = require("../storage")
const router = Router();

router.get("/produtos", ProdutoController.paginaProdutos)

router.get("/produtos/novo", ProdutoController.paginaAdicionarProduto)
// rota com parâmetro dinâmico
router.get("/produtos/editar/:id", ProdutoController.paginaEditProduto)
// post é um envio que vou fazer
router.post("/produtos/atualizar", multer.single("image"), ProdutoController.editProduto)

router.post("/produtos/enviar", multer.single("image"), ProdutoController.addProduto)

router.post("/produtos/deletar", ProdutoController.deleteProduto)

module.exports = router