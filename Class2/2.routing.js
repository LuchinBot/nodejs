const http = require('node:http')
// const fs = require('node:fs')
const desirePort = process.env.PORT ?? 3000

const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('Not Found')
          break
      }
  }
}

const server = http.createServer(processRequest)
server.listen(desirePort, () => {
  console.log(`Listening on port http://localhost:${desirePort}`)
})
