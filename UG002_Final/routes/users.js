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
  var value=[eventname,priceenter];
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


router.post('/admin-edit', function(req, res, next) {
 // var name = req.body.name;
  var desc = req.body.desc;
  var date = req.body.date;
  var time = req.body.time;
  var loc = req.body.loc;
  var price = req.body.price;

  req.pool.getConnection(function(error, connection){
    if(error){
      res.sendStatus(500);
      return;
    }

    var query = "INSERT INTO edit_event_2(event_overview, event_date, event_time, event_location, price) VALUES ( ?, ?, ?, ?, ?)";
    var value = [ desc, date, time, loc, price];

    connection.query(query, value, function(error, rows, fields){
      if(error){
        res.sendStatus(500);
        return;
      }
      res.json(rows);
    });
  });
});

router.post('/adddesc',function(req,res,next){
  var desc = req.body.desc;
  req.pool.getConnection(function(error,connection){
    if(error) {
      res.sendStatus(500);
      return;
  }
  var query = "INSERT INTO DESC_EVENT(description) VALUES(?); ";
  var value=[desc];
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

router.post('/addname',function(req,res,next){
  var name = req.body.name;
  req.pool.getConnection(function(error,connection){
    if(error) {
      res.sendStatus(500);
      return;
  }
  var query = "INSERT INTO availability(name) VALUES(?); ";
  var value=[name];
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
