var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuthorized = require('../controller/requestAuthenticator')

const BASE_URL = 'http://localhost:8000'
const api = apiAdapter(BASE_URL)

router.get('/feeds', isAuthorized, (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/feeds/:hashtag', isAuthorized, (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.post('/feeds', isAuthorized, (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router