const Produto = require("../models/Produto")

class ProdutoController {
    static async paginaProdutos(req, res){
        let query = {}
        const { nomeProduto } = req.query //haverá um texto

        if(nomeProduto){
            // vai buscar o usuário escreve no input e ignora o camelcase
            query = {name: { $regex: `${ nomeProduto }`, $options: "i"}}
        }

        const produtos = await Produto.find(query).lean()
        res.render("produtos", { produtos, nomeProduto })
    }

    static async paginaAdicionarProduto(req, res){
        res.render("add_produto")
    }

    static async addProduto(req, res){
        const { name, price, description, quantity } = req.body
        const image = req.file?.publicUrl
        const produto = Produto({ name, price, description, quantity, image }) //Monta o objeto
        await produto.save() //Salva no BD
        
        res.redirect("/produtos") // Redireciona pra essa rota
    }

    static async paginaEditProduto(req, res){
        const { id } = req.params
        const produto = await Produto.findById(id).lean()
        res.render("editar_produto", {produto})
    }

    static async editProduto(req, res){
        // extrai o id que é o id do produto
            const { id, name, price, description, quantity } = req.body;
            const file = req.file;
        
            await Produto.findByIdAndUpdate(id, {
              name,
              price,
              description,
              quantity,
              image: file?.publicUrl,
            });
        
        // quando atualiza irá para /produtos
        res.redirect("/produtos")
    }

    static async deleteProduto(req, res){
        // tira do body um id
        const { id } = req.body
        // vai procurar um produto com esse id e deletar
        await Produto.findByIdAndDelete(id)

        res.redirect("/produtos")
    }
}

module.exports = ProdutoController