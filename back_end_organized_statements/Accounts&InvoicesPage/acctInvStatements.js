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

// show accounts
app.get("/accounts", function(req, res) {
  var sql = "SELECT * FROM accounts";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      res.json(rows);
    }
  });
});

// show all transactions transactions
app.get("/transactions", function(req, res) {
  var sql =
    "SELECT DATE_FORMAT(date, '%m/%d/%Y') as transDate, transType, payor, amount, method, description  from transactions";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      res.json(rows);
    }
  });
});

// show all invoices
app.get("/invoices", function(req, res) {
  var sql = "SELECT * FROM invoices";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      res.json(rows);
    }
  });
});

// get id and show payor full name
app.get("/payors", function(req, res) {
  var sql = "SELECT id, billing_full_name FROM clients";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

// instert manual transaction
app.post("/putTrans", function(req, res) {
  //var title = req.body.title;
  con.query(
    "INSERT INTO transactions (date, transType, payor, amount, method, description) VALUES (?, ?, ?, ?, ?,?) ",
    [
      req.body.date,
      req.body.transactionType,
      req.body.payor,
      req.body.amount,
      req.body.paymentMethod,
      req.body.description
    ],
    function(err, rows) {
      if (err) {
        res.json({ Error: true, Message: "Error Execute Sql", err });
      } else {
        // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
        res.json(rows);
      }
    }
  );
});
