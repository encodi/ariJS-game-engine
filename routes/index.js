var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile("../public/index.html", "utf8", function(err, data){
    if(err) throw err;

    res.send(data);
  });
});

module.exports = router;
