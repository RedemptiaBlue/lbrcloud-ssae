const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.send('this will send all or some gifts depending on the query string');
})

router.get('/:giftId', function(req, res, next) {
    res.send('this should send the specified gift');
})

module.exports = router
