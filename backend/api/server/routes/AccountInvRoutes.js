//import { Router } from "express";
const express = require("express");
var router = express.Router();
//import AccountInvController from "../controllers/AccountInvController";
const AccountInvController = require("../controllers/AccountInvController");
//const router = Router();

router.get("/accounts", AccountInvController.getAllAccounts);
router.get("/accounts2", AccountInvController.getAllAccounts2);
router.get("/accountdetails", AccountInvController.getDetailAccounts);
router.get("/accountdetails2", AccountInvController.getDetailAccounts2);
//router.get("/transactions", AccountInvController.getAllTransactions);
//router.get("/transactions2", AccountInvController.getAllTransactions2);
router.get("/payors", AccountInvController.getDistinctPayors);
router.get("/payors2", AccountInvController.getDistinctPayors2);
//router.get("/invoices", AccountInvController.getAllInvoices);
//router.delete("/transactions/:id", AccountInvController.deleteOneTransaction);
/* router.post(
  "/transactions/deleteMany",
  AccountInvController.deleteManyTransactions
); */
//router.post("/transactions", AccountInvController.addTransaction);
//router.post("/transactions2", AccountInvController.addTransaction2);
//router.post("/maninvoices", AccountInvController.addManInvoice);
// router.post('/insert', AccountInvController.insertOne)

//export default router;
module.exports = router;
