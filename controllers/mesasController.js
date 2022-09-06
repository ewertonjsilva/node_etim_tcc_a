const { json } = require('express');
const db = require('../database/connection'); 

module.exports = {
    async listarMesas(request, response) { 
        try {
            const sql = 'SELECT mes_id, mes_nome, mes_status, mes_lugares, ped_id FROM mesas;';  
            //console.log('tam: ' + mesas[0].length);
            //return response.status(200).json(mesas[0]);   
            // return response.status(200).json(mesas[0][0]); // apenas 1º item do resultado sql
            // return response.status(200).json(mesas[0][0].mes_lugares); // apenas o valor de um item retornado
            const mesas = await db.query(sql); 
            return response.status(200).json({confirma: 'Sucesso', nResults: mesas[0].length, message: mesas[0]});  
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};

