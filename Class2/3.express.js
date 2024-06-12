const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 3000
app.use(express.json())
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''

//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     res.body = data
//     next()
//   })
// })

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('Not Found - 404')
})

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})
