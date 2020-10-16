const express = require('express')
const helmet = require('helmet')
const projectRouter = require('./data/router') 
const server = express()

server.use(express.json())
server.use(helmet())

server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
    res.send({message: 'Server is working, Horray!'})
})

module.exports = server