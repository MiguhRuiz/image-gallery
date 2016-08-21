import express from 'express'
import BodyParser from 'body-parser'
import React from 'react'
import { renderToString } from 'react-dom/server'
import api from './src/server/routes/api'

const app = express()
const port = process.env.PORT || 3000

import Component from './src/server/components/gallery-app/index.jsx'
const App = renderToString(<Component />)

app.use(BodyParser.json())
app.use('/public', express.static('public'))
app.use('/api', api)

app.get('/', (req, res) => {
  res.send(App)
})

app.listen(port, () => {
  console.log(`[APP] Server listening on ${port}`)
})
