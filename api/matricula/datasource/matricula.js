const { SQLDataSource } = require('datasource-sql');
const DataLoader = require('dataloader');

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

    matriculasLoader = new DataLoader(this.getMatriculasPorEstudante.bind(this));

    async getMatriculasPorEstudante(idsEstudantes) {
        const matriculas = await this.db
            .select('*')
            .from('matriculas')
            .whereIn("estudante_id", idsEstudantes)
            .select()

        return matriculas;
    }

    async deletarMatricula(idMatricula) {
        await this.db('matriculas')
        .where({ id: Number(idMatricula) })
        .del()

        this.Resposta.mensagem = "registro deletado"
        return this.Resposta
    }

    async cancelarMatricula(idMatricula) {
        await this.db
          .update({ status: "cancelado" })
          .where({ id: Number(idMatricula) })
          .into('matriculas')
     
        this.Resposta.mensagem = "matrícula cancelada"
        return this.Resposta
    }
}

module.exports = MatriculasAPI;
