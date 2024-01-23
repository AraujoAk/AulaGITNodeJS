const db = require('../databases/conection')
const path = require('path')

class AlunoController {
    home(req, res) {
        res.render('home')
    }
    novoAluno(req, res) {
        const { matricula, nome, email, turma, serie, sexo, telefone, endereco, responsavel } = req.body

        db.insert({ matricula, nome, email, turma, serie, sexo, telefone, endereco, responsavel }).table('alunos').then(data => {
            console.log(data)
            res.json({ message: 'Aluno cadstrado com sucesso!!' })
        }).catch(error => {
            console.log(error)
        })
    }
    listarAlunos(req, res) {
        db.select("*").table("alunos").then(
            alunos => {
                console.log(alunos)
                // res.json(alunos)
                res.render('listarAlunos', { bancoAlunos: alunos })
            }
        ).catch(error => {
            console.log(error)
        })
    }
    buscarAluno(req, res) {
        const dados = req.params
        db.select("*").table("alunos").where({ matricula: dados.matricula }).then(aluno => {
            console.log(aluno)
            if (aluno.length > 0) {
                res.json(aluno)
            } else {
                console.log("Nenhum aluno")
                res.json({ message: "Nenhum Aluno com esta matricula!!" })
            }
        }).catch(error => {
            console.log(error)
        })
    }
    editarAluno(req, res) {
        const { matricula } = req.params
        const { nome, email, turma, serie, sexo, telefone, endereco, responsavel } = req.body
        db.where({ matricula: matricula }).update({ nome, email, turma, serie, sexo, telefone, endereco, responsavel }).table
            ("alunos").then(data => {
                res.json({ message: "Dados Atualizados com sucesso!!" })
            }).catch(error => {
                res.json(error)
            })
    }
    deletarAluno(req, res) {
        const { matricula } = req.params
        db.where({ matricula: matricula }).del().table("alunos").then(data => {
            res.json({ message: "Registro apagado com sucesso!!" })
            console.log(data)
        }).catch(error => {
            res.json(error)
        })
    }
    formCadastro(req, res) {
        // res.sendFile(path.join(__dirname, '../views/cad.html'))
        res.render('cad')
    }
    formEditarAluno(req, res) {
        const dados = req.params
        db.select("*").table("alunos").where({ matricula: dados.matricula }).then(aluno => {
            console.log(aluno)
            if (aluno.length > 0) {
                res.render('editar', { aluno })
            } else {
                console.log("Nenhum aluno")
                res.json({ message: "Nenhum Aluno com esta matricula!!" })
            }
        }).catch(error => {
            console.log(error)
        })
    }
    formDeletarAluno(req, res) {
        const dados = req.params
        db.select("*").table("alunos").where({ matricula: dados.matricula }).then(aluno => {
            console.log(aluno)
            if (aluno.length > 0) {
                res.render('excluir', { aluno })
            } else {
                console.log("Nenhum aluno")
                res.json({ message: "Nenhum Aluno com esta matricula!!" })
            }
        }).catch(error => {
            console.log(error)
        })
    }
}
module.exports = new AlunoController()