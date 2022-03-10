const { SQLDataSource } = require('datasource-sql');

class MatriculasAPI extends SQLDataSource {
    constructor(dbConfig) {
        super(dbConfig);
        this.Resposta = {
            mensagem: ""
        }
    }

    async createMatricula(ids) {
        const { estudante, turma } = ids;
        const novaMatricula = {
            estudante_id: estudante,
            turma_id: turma,
            status: "confirmado"
        }
        
        await this.db
            .insert(novaMatricula)
            .into('matriculas')

        this.Resposta.mensagem = "matricula criada";
        return this.Resposta;
    }
}

module.exports = MatriculasAPI;
