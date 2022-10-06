const { json } = require("express");
const db = require("../database/connection"); 

module.exports = {
    async listarUsuarios(request, response) { 
        try {

            const sql = 'SELECT usu_id, usu_nome, usu_email, usu_senha, usu_tipo FROM usuarios;';  
            const usuarios = await db.query(sql); 
            return response.status(200).json({confirma: 'Sucesso', nResults: usuarios[0].length, message: usuarios[0]});   
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};