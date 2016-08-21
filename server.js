import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()
const port = process.env.PORT || 3000

import Component from './src/server/gallery-app/index.jsx'
const App = renderToString(<Component />)

app.get('/', (req, res) => {
  res.send(App)
})

app.listen(port, () => {
  console.log(`[APP] Server listening on ${port}`)
})
