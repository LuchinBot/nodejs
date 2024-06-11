const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

app.post('/pokemon', (req, res) => {
  let body = ''
  // Escuchar el evento body
  req.on('data', (chunk) => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    // Llamar un base de datos para guardar la información...
    res.status(201).json(data)
  })
})
app.use((req, res) => {
  res.status(404).send('Not Found - 404')
})

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})
