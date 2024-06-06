const http = require('node:http')

const { findAvailablePort } = require('./9.free-port.js')

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.end('Hello World')
})

findAvailablePort(1234).then((port) => {
  server.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
  })
})
