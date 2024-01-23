const express = require('express')
const alunoController = require('../controllers/alunoController')
const router = express.Router()
const override = require('method-override')

router.use(override('_method'))
router.get('/', alunoController.home)
router.post('/cadastro', alunoController.novoAluno)
router.get('/listarAlunos', alunoController.listarAlunos)
router.get('/buscarAluno/:matricula', alunoController.buscarAluno)
router.put('/editarAluno/:matricula', alunoController.editarAluno)
router.get('/editarAluno/:matricula', alunoController.formEditarAluno)
router.delete('/deletarAluno/:matricula', alunoController.deletarAluno)
router.get('/deletarAluno/:matricula', alunoController.formDeletarAluno)
router.get('/formCadastroUser', alunoController.formCadastro)

module.exports = router