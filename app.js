const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config();

const heroesRouter = require('./routes/api/heroes');

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
// app.use(express.static("public"));

app.use('/api/heroes', heroesRouter)

app.use((req, res) => {
    res.status(404).json({message: 'Not found'})
})

app.use((err, req, res, next) => {
    res.status(500).json({message: err.message})
})

module.exports = app
