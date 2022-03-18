const express = require('express');
const router = express.Router();

router.get('/:userId', function(req, res, next) {
  res.send("this should send profile information of user in param");
});

router.get(":userId/gifts-received", function(req, res, next) {
  res.send("this should send the gifts this user has received")
})

router.get(":userId/gifts-given", function(req, res, next) {
  res.send("this should send the gifts this user has gifted")
})

router.get('/all', function(rea, res, next) {
  res.send("this should send a list of all users by name")
})

module.exports = router;
