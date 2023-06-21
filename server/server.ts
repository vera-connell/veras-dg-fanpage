import express from 'express'
import path from 'path'
import dgRoutes from './routes/dgRoutes'

const server = express()

server.use(express.json())

server.use('/api/v1/dg', dgRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(path.join(__dirname, '../assets')))
  server.use('/', express.static(path.join(__dirname, '../../public')))

  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html')) 
  })
}
export default server
