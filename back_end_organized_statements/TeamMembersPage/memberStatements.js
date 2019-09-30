const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mysql = require("mysql");
// helps extract data from client
const bodyParser = require("body-parser");
// cors is not best to be used on production; will need to do something different on prod
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Artm@y08",
  database: "dev2qa"
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// connect to database
con.connect(err => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

// show all members
app.get("/members", function(req, res) {
  var sql = "SELECT * FROM members";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

// show active members
app.get("/members/active", function(req, res) {
  var sql = "SELECT * FROM members WHERE active = 1";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

// show full name of active therapists
app.get("/gettherapists", function(req, res) {
  var sql = "SELECT member_full_name FROM members WHERE active = 1 ";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

//Need to eventually cleanup to prevent sql injection. This will eventually be used when creating a new member
app.post("/putNewMember2", function(req, res) {
  //var title = req.body.title;

  var sql =
    "INSERT INTO members (role, title, first_name, last_name, email, phone, street_address, city, zip, location, npi, pass, confirm_pass) VALUES ('" +
    req.body.newRole +
    "','" +
    req.body.newTitle +
    "','" +
    req.body.newFirstName +
    "','" +
    req.body.newLastName +
    "','" +
    req.body.newEmail +
    "','" +
    req.body.newPhone +
    "','" +
    req.body.newStreetAddress +
    "','" +
    req.body.newCity +
    "','" +
    req.body.newZip +
    "','" +
    req.body.newLocation +
    "','" +
    req.body.newNPI +
    "','" +
    req.body.newPass +
    "','" +
    req.body.newConfirmPass +
    "') WHERE NOT EXISTS SELECT email from members WHERE email = '" +
    req.body.newEmail +
    "'";
  con.query(sql, function(err, rows) {
    if ((req.body.newEmail = con.query("EXISTS SELECT email from members"))) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});
