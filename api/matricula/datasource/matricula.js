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

    async getMatriculasPorTurma(idTurma) {
        const matriculas = await this.db
            .select('*')
            .from('matriculas')
            .where({ turma_id: idTurma })

        return matriculas;
    }
}

module.exports = MatriculasAPI;
