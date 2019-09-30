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

// show full name of active clients
app.get("/getclients", function(req, res) {
  var sql = "SELECT client_full_name FROM clients WHERE active = 1 ";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

// show all clients
app.get("/allclients", function(req, res) {
  var sql = "SELECT * FROM clients";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

// show all active clients
app.get("/clients/active", function(req, res) {
  var sql = "SELECT * FROM clients WHERE active = 1";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

// get id, first and last name from clients
app.get("/clientlist", function(req, res) {
  var sql = "SELECT id, first_name, last_name FROM clients";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});
