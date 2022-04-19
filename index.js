const express = require('express')
const priorities = require('./priorities')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())

app.get('/priorities', (req, res) => {
  res.send(priorities)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})