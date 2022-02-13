const { Router } = require("express");
const { paginaProdutos } = require("../controllers/ProdutoController");
const ProdutoController = require("../controllers/ProdutoController")
const router = Router();

router.get("/produtos", ProdutoController.paginaProdutos)

router.get("/produtos/novo", ProdutoController.paginaAdicionarProduto)
// rota com parâmetro dinâmico
router.get("/produtos/editar/:id", ProdutoController.paginaEditProduto)
// post é um envio que vou fazer
router.post("/produtos/atualizar", ProdutoController.editProduto)

router.post("/produtos/enviar", ProdutoController.addProduto)

router.post("/produtos/deletar", ProdutoController.deleteProduto)

module.exports = router