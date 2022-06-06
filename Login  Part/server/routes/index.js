var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

let users = {
  Ernest: { username: "Ernest", password: "Ernest123" },
  Dale: { username: "Dale", password: "123456" },
  Jennifer: { username: "Jennifer", password: "123456" },
  Alexandra: { username: "Alexandra", password: "123456" }
};

// --> testing for sessions
router.get('/test', function(req, res, next) {

  if ('user' in req.session) {
    res.json(req.session.user);
    // res.sendStatus(404);
  } else {
    // res.send("NO USERS IN SESSIONS!!!");
    console.log("There is no users!!!");
    res.send();
  }

});
// LOGIN PART!!!!!!!!!!!!!!!
router.post('/login', function(req, res, next) {


  if ('username' in req.body && 'password' in req.body) {

    req.pool.getConnection(function(error, connection) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
        return;
      }

      // Get username & password fields
      let query = "SELECT username, password FROM adminAccount WHERE username = ? AND password = ?; ";

      connection.query(query, [req.body.username, req.body.password], function(error, rows, fields) {
        connection.release(); // release connections

        if (error) {
          console.log(error);
          res.sendStatus(500);
          return;
        }

        if (rows.length > 0) {
          console.log("Username and Passwore are both CORRECT!!!");
          req.session.user = rows[0];
          res.sendStatus(200);
        } else {
          console.log("Username CORRECT BUT Password INCORRECT!");
          res.sendStatus(401);
        }

      });
    });



    // if (req.body.username in users && users[req.body.username].password === req.body.password) {
    //   req.session.user = users[req.body.username];
    //   console.log("Success");
    //   res.status(200);

    // // testing purposes (delete if no problem)
    // res.send("Success login!!!");
    // }
    // // the login username OR password is written wrongly
    // else {
    //   console.log("Bad login!!!");
    //   res.status(401);

    // // testing purposes (delete if no problem)
    // res.send("Bad login!!!");
    // }
  }
  // if the whole JSON structure for username + password are wrong!!!
  else {
    console.log("USERNAME & PASSWORD FORMAT ARE INCORRECT");
    res.status(400);

    // testing purposes (delete if no problem)
    res.send("USERNAME & PASSWORD FORMAT ARE INCORRECT");
  }

});

// SIGN UP PART!!!!!!!!!!!!!!!!!
router.post('/signup', function(req, res, next) {

  if ('username' in req.body && 'password' in req.body) {

    req.pool.getConnection(function(error, connection) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
        return;
      }

      // 1st part: INSERT username & password fields
      let query = "INSERT INTO adminAccount (username, password) VALUES(?, ?); ";

      connection.query(query, [req.body.username, req.body.password], function(error, rows, fields) {

        if (error) {
          console.log(error);
          res.sendStatus(403);
          return;
        }

      // 2nd part: GET username & password fields
      let query = "SELECT username, password FROM adminAccount WHERE username = ? AND password = ?; ";

      connection.query(query, [req.body.username, req.body.password], function(error, rows, fields) {
        connection.release(); // release connections

        if (error) {
          console.log(error);
          res.sendStatus(500);
          return;
        }
        // Username + Password --> working fine
        if (rows.length > 0) {
          console.log("Insert Username and Password are both CORRECT!!!");
          req.session.user = rows[0];
          res.sendStatus(200);
        }
        // either the typed-in usename / password is correct
        else {
          console.log("Username CORRECT BUT Password INCORRECT!");
          res.sendStatus(401);
        }

        });
      });
    });


  }
  // if the whole JSON structure for username + password are wrong!!!
  else {
    console.log("BOTH Username & Password are incorrect!");
    res.sendStatus(400);
  }

});






  // if ('username' in req.body && 'password' in req.body) {

  //   // REVERSE: this part -> where users already exists!!!
  //   if(req.body.username in users){
  //     console.log('user exists');
  //     res.sendStatus(403);
  //   }
  //   // create an account coz there is none in our record
  //   else {
  //     users[req.body.username] = { username: req.body.username, password: req.body.password };
  //     console.log("User "+req.body.username+" created");
  //     req.session.user = users[req.body.username];
  //     res.sendStatus(200);
  //   }



  // if the whole JSON structure for username + password are wrong!!!
//   else {
//     console.log('bad request');
//     res.sendStatus(400);
//   }

// });

// Delete users from Login SESSIONS
router.post('/logout', function(req, res, next) {

  if ('user' in req.session) {
    console.log("User DELETED");

    delete req.session.user;
  }

  res.end();
});

module.exports = router;
