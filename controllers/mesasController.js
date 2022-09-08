const { json } = require('express');
const db = require('../database/connection'); 

module.exports = {
    async listarMesas(request, response) { 
        try {
            const sql = 'SELECT mes_id, mes_nome, mes_status, mes_lugares, ped_id FROM mesas;';  
            const mesas = await db.query(sql); 
            return response.status(200).json({confirma: 'Sucesso', nResults: mesas[0].length, message: mesas[0]});  
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};

