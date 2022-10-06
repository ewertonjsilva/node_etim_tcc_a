const { json } = require("express");
const db = require("../database/connection"); 

module.exports = {
    async listarProdutos(request, response) { 
        try {

            const { prd_id = '%%' } = request.params;
            const { prd_nome = '%%' } = request.body;
            const { ptp_id = '%%' } = request.body; 

            const { page = 1, limit = 5 } = request.query; 
            const inicio = (page -1) * limit;

            const sql = 'SELECT prd.prd_id, prd.prd_nome, prd.prd_valor, prd.ptp_id, ptp.ptp_nome, prd.prd_disponivel = 1 AS prd_disponivel, prd.prd_img, prd.prd_destaque = 1 AS prd_destaque, prd.prd_img_destaque, prd.prd_descricao FROM produtos prd INNER JOIN produto_tipos ptp ON prd.ptp_id = ptp.ptp_id WHERE prd.prd_id like ? AND prd.prd_nome like ? AND prd.ptp_id like ? LIMIT ?, ?;'; 
            const values = [prd_id, prd_nome, ptp_id, inicio, parseInt(limit)];   
            const produtos = await db.query(sql, values); 
            return response.status(200).json({confirma: 'Sucesso', nResults: produtos[0].length, message: produtos[0]});  
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};

//http://localhost:3333/produtos?page=1&limit=20