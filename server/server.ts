import express from 'express'
import path from 'path'
import dgRoutes from './routes/dgRoutes'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/dg', dgRoutes)

export default server
