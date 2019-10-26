//import { Router } from "express";
// import ClientController from "../controllers/ClientController";
const express = require("express");
var router = express.Router();
const ClientController = require("../controllers/ClientController");
//const router = Router();

router.get("/all", ClientController.getAllClients);
router.delete("/:id", ClientController.deleteOne);
router.get("/payors", ClientController.getAllPayors);
router.post("/addclient", ClientController.addClient);
//export default router;
module.exports = router;
