import express from 'express'
import PouchDB from 'pouchdb'

const Router = express.Router()
const db = new PouchDB('gallery')

Router.get('/', (req, res) => {
  db
    .allDocs({ include_docs:true })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(404)
      res.end(err)
    })
})
Router.get('/:id', (req, res) => {
  db
    .get(req.params.id)
    .then((doc) => {
      res.json(doc)
    })
})
Router.post('/', (req, res) => {
  db
    .post(req.body)
    .then((res) => {
      res.status(200)
      res.json(res)
    })
})

export default Router
