const db = require('../database/connection'); 
const express = require('express'); 
const router = express.Router();  

// importação dos controlers utilizados nas rotas
const CidadesController = require('../controllers/cidadesController');
const ClientesController = require('../controllers/clientesController');
const EnderecoClientesController = require('../controllers/enderecoClientesController');
const MesasController = require('../controllers/mesasController');
const PedidoProdutosController = require('../controllers/pedidoProdutosController');
const PedidosController = require('../controllers/pedidosController');
const ProdutosController = require('../controllers/produtosController');
const ProdutosTipoController = require('../controllers/produtoTiposController');
const UsuariosController = require('../controllers/usuariosController');

// definição de rotas

router.get('/cidades', CidadesController.listarCidades); 
// cadastrar
// editar
// excluir


router.get('/clientes', ClientesController.listarClientes); 
// cadastrar
// editar
// excluir


router.get('/enderecoclientes', EnderecoClientesController.listarEnderecoClientes); 
// cadastrar
// editar
// excluir


router.get('/mesas', MesasController.listarMesas); 
router.post('/mesas', MesasController.create); 
router.patch('/mesas/:mes_id', MesasController.update); 
router.delete('/mesas/:mes_id', MesasController.delete); 


router.get('/pedidoprodutos', PedidoProdutosController.listarPedidoProdutos); 
// cadastrar
// editar
// excluir


router.get('/pedidos', PedidosController.listarPedidos); 
// cadastrar
// editar
// excluir


router.get('/produtos', ProdutosController.listarProdutos); 
router.get('/produtos/:prd_id', ProdutosController.listarProdutos); 
// cadastrar
// editar
// excluir


router.get('/produtostipo', ProdutosTipoController.listarProdutoTipos); 
// cadastrar
// editar
// excluir


router.get('/usuarios', UsuariosController.listarUsuarios); 
router.get('/usuarios/login', UsuariosController.login); 
// cadastrar
// editar
// excluir

module.exports = router;