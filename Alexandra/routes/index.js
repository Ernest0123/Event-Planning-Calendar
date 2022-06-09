var express = require('express');
var router = express.Router();

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("895797847270-jl2tfe2801apasi8pee3gghnujsit25i.apps.googleusercontent.com");

const argon2 = require('argon2');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



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

// For ADMIN login only!!!
router.post('/adminlogin', function(req, res, next) {

  // ADMIN PART wehn username + password is within
  if ('username' in req.body && 'password' in req.body) {

    req.pool.getConnection(function(error, connection) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
        return;
      }

        // Get username & password fields (for admins)
      let query = "SELECT username, password FROM adminAccount WHERE username = ? AND password = ?; ";

      connection.query(query, [req.body.username, req.body.password], function(error, rows, fields) {
        connection.release(); // release connections

        if (error) {
          console.log(error);
          res.sendStatus(500);
          return;
        }

        if (rows.length > 0) {
          console.log("Admin Username and Passwords are both CORRECT!!!");
          req.session.admin = rows[0];
          res.sendStatus(200);
        } else {
          console.log("ONLY Admin Username or Password is CORRECT!");
          res.sendStatus(401);
        }

      });
    });

  }

  // if the whole JSON structure for username + password are wrong!!!
  else {
    console.log("USERNAME & PASSWORD FORMAT ARE INCORRECT");
    res.status(400);
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

        // Get username & password fields (for users)
      let query = "SELECT username, password FROM users WHERE username = ?; ";

      connection.query(query, [req.body.username], async function(error, rows, fields) {
        connection.release(); // release connections

        if (error) {
          console.log(error);
          res.sendStatus(500);
          return;
        }

        if (rows.length > 0) {

          try {
            // ARGON 2 verifications
          // the ".password = the hash value of the password"
          // using verfy --> and compare with the users password
          if ( await argon2.verify(rows[0].password, req.body.password) ) {

            // if password match
            console.log("Username and Password are both CORRECT!!!");

            // delete any pre-existing passwords
            delete rows[0].password;

            // grab the first user
            req.session.user = rows[0];
            res.sendStatus(200);
            } else {
              // password did not match (login is bad)
              console.log("Either Username or Password is CORRECT!");
              console.log("The JSON structure is correct. ");
              res.sendStatus(401);
            }
          } catch(error) {
            // internal failutre
            console.log("Internal Failure --> Bad Verficiations");
            res.sendStatus(401);
          }
        } else {
          // ABSOLUTE WRONG
          console.log("WRONG --> Bad Users");
          res.sendStatus(401);
        }

      });
    });

  }

  else if ('token' in req.body) {

    let email = null;
    // Google authentications
    async function verify() {
      const ticket = await client.verifyIdToken({
          idToken: req.body.token,
          audience: "895797847270-jl2tfe2801apasi8pee3gghnujsit25i.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
          // Or, if multiple clients access the backend:
          //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      const userid = payload['sub'];

      // test user id
      // console.log(userid);

      // return email payload
       email = payload["email"];
       console.log(email);
      // If request specified a G Suite domain:
      // const domain = payload['hd'];
    }

    // if unable to retrieve google email from users
    verify().then(function() {

      // run code
      req.pool.getConnection(function(error, connection) {
        if (error) {
          console.log(error);
          res.sendStatus(500);
          return;
        }

        // 1st part: INSERT the Google email INTO our database
        // so that there will not be duplicates email in future
      let query = "INSERT INTO users (email, lastname, firstname, username, password) VALUES(?, ?, ?, ?, ?); ";

      connection.query(query, [email], function(error, rows, fields) {

        if (error) {
          console.log(error);
          res.sendStatus(403);
          return;
        }

      // 2nd part: GET that Gmail from user
      let query = "SELECT email, lastname, firstname, username, password FROM users WHERE email = ?; ";

      // connect to database WDCproject where the table is "users"
      connection.query(query, [email], function(error, rows, fields) {
        connection.release(); // release connections

        if (error) {
          console.log(error);
          res.sendStatus(500);
          return;
        }

        if (rows.length > 0) {
          console.log("Email already EXISTS!!!");
          req.session.user = rows[0];
          res.sendStatus(200);
        } else {
          console.log("Email does not exist, but Goggle account logged in");
          res.sendStatus(401);
        }

        });

        //   // Get username & password fields (for users)
        // let query = "SELECT email, lastname, firstname, username, password FROM users WHERE email = ?; ";

        // connection.query(query, [email], function(error, rows, fields) {
        //   connection.release(); // release connections

        //   if (error) {
        //     console.log(error);
        //     res.sendStatus(500);
        //     return;
        //   }

        //   if (rows.length > 0) {
        //     console.log("Email already EXISTS!!!");
        //     req.session.user = rows[0];
        //     res.sendStatus(200);
        //   } else {
        //     console.log("Email does not exist, but Goggle account logged in");
        //     res.sendStatus(200);
        //   }

        });
      });

    }).catch(function() {
        console.log("Your Google email has errors!");
        res.sendStatus(401);
    });

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

  // get username, password, email, lastname and firstname
  if ('signusername' in req.body && 'signpassword' in req.body && 'email' in req.body && 'lastname' in req.body && 'firstname' in req.body) {

    req.pool.getConnection(async function(error, connection) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
        return;
      }

      // ARGON 2 hashing for Signing up
      let hash = null;
      try {
        hash = await argon2.hash(req.body.signpassword);
      } catch(error) {
        console.log(error);
        res.sendStatus(500);
        return;
      }

      // 1st part: INSERT username & password fields
      let query = "INSERT INTO users (email, lastname, firstname, username, password) VALUES(?, ?, ?, ?, ?); ";

      connection.query(query, [req.body.email, req.body.lastname, req.body.firstname, req.body.signusername, hash], function(error, rows, fields) {

        if (error) {
          console.log(error);
          res.sendStatus(403);
          return;
        }

      // 2nd part: GET username & password fields
      // let query = "SELECT email, lastname, firstname, username, password FROM users WHERE email=? AND lastname=? AND firstname=? AND username=? AND password=?; ";
      let query = "SELECT email, lastname, firstname, username, password FROM users WHERE userid = LAST_INSERT_ID(); ";

      // connect to database WDCproject where the table is "users"
      connection.query(query, [req.body.email, req.body.lastname, req.body.firstname, req.body.signusername, req.body.signpassword], function(error, rows, fields) {
        connection.release(); // release connections

        if (error) {
          console.log(error);
          res.sendStatus(500);
          return;
        }
        // Username + Password --> working fine
        if (rows.length > 0) {
          console.log("Insert Username, Password, Email, names are ALL CORRECT!!!");
          req.session.user = rows[0];
          res.sendStatus(200);
        }
        // either the typed-in usename / password is correct
        else {
          console.log("ANY columns might be wrong!");
          res.sendStatus(401);
        }

        });
      });
    });


  }
  // if the whole JSON structure for username + password are wrong!!!
  else {
    console.log("The JSON name or structure is wrong!");
    res.sendStatus(400);
  }

});




// Delete users from Login SESSIONS
router.post('/logout', function(req, res, next) {

  // user sessions
  if ('user' in req.session) {
    console.log("User " + " DELETED");

    delete req.session.user;
  }
  // admin sessions
  else if ('admin' in req.session) {
    console.log("Admin " + " DELETED");

    delete req.session.admin;
  }

  res.send();
});

module.exports = router;
