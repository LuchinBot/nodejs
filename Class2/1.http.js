const http = require('node:http')
const fs = require('node:fs')

const desirePort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('Hello World como están?')
  } else if (req.url === '/default.png') {
    fs.readFile('./other.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('Internal Server Error')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('Not Found')
  }
}
const server = http.createServer(processRequest)

server.listen(desirePort, () => {
  console.log(`Listening on port http://localhost:${desirePort}`)
})
