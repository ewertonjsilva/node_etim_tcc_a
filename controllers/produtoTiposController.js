const { json } = require("express");
const db = require("../database/connection"); 

module.exports = {
    async listarProdutoTipos(request, response) { 
        try {
            return response.status(200).json({confirma: 'ProdutoTipos'});   
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};