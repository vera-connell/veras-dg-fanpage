import server from './server'

const PORT = process.env.PORT || 3010

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
})
