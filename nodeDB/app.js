const express = require('express')
const cors = require('cors')
const router = require('./routes/alunosRoutes')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.use('/alunos', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
