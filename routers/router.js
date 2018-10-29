var express = require('express');
var router = express.Router()
var feedRouter = require('./feedService')
var hashtagRouter = require('./hashtagService')
var authRouter = require('../controller/AuthController')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(feedRouter)
router.use(hashtagRouter)
router.use(authRouter)

module.exports = router