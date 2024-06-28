const express = require('express')
const movies = require('./movies.json')
const { validateMovie } = require('./movies')
const app = express()
app.use(express.json())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

// ------------GET-----------------
// Todos los recursos que sean MOVIES se identifica con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovie = movies.filter((movie) => movie.genre.includes(genre))
    return res.json(filteredMovie)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find((movie) => movie.id === id)
  if (movie) res.json(movie)
  res.status(404).json({ message: 'Movie not found' })
})

// ------------POST-----------------
app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const newMovide = {
    id: crypto.randomUUID(),
    ...result.data,
  }
  movies.push(newMovide)
  res.status(201).json(newMovide)
})
// ------------ESCUCHAR EL PUERTO-----------------

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})
