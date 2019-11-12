const config = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const memberRoutes = require("./server/routes/MemberRoutes");
const clientRoutes = require("./server/routes/ClientRoutes");
const eventRoutes = require("./server/routes/EventRoutes");
const accountInvRoutes = require("./server/routes/AccountInvRoutes");
//const formRoutes = require("./server/routes/FormRoutes");
//const templateRoutes = require("./server/routes/TemplateRoutes");

// import config from "dotenv";
// import express from "express";
// import bodyParser from "body-parser";
// import memberRoutes from "./server/routes/MemberRoutes";
// import clientRoutes from "./server/routes/ClientRoutes";
// import eventRoutes from "./server/routes/EventRoutes";
// import accountInvRoutes from "./server/routes/AccountInvRoutes";
// import formRoutes from "./server/routes/FormRoutes";
// import templateRoutes from "./server/routes/TemplateRoutes";

config.config();

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use("/members", memberRoutes);
app.use("/clients", clientRoutes);
app.use("/events", eventRoutes);
app.use("/accounts", accountInvRoutes);
//app.use("/forms", formRoutes);
//app.use("/templates", templateRoutes);

// when a random route is inputed
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to this API."
  })
);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

//export default app;
module.exports = app;
