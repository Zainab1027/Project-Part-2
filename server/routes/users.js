let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Users Page');
});

module.exports = router;
