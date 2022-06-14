var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/addevent',function(req,res,next){
  var eventname=req.body.eventname;
  var priceenter=req.body.priceenter;
  req.pool.getConnection(function(error,connection){
    if(error) {
      res.sendStatus(500);
      return;
  }
  var query = "INSERT INTO Events_Backup_2(event_name, price) VALUES(?,?); ";
  value=[eventname,priceenter];
  connection.query(query,value,
    function(error, rows, fields){
    connection.release();
    if(error) {
        res.sendStatus(500);
        return;
    }
    res.json(rows);
  });

  });

});


module.exports = router;
