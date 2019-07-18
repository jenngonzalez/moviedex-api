const express = require('express');
const morgan = require('morgan');
const movieStore = require ('./movie-store.json');

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello from the Movie Server!')
})

app.get('/movie', (req, res) => {
    res.json(movieStore)
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})