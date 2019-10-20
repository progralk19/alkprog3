import { Router } from "express";
import AccountInvController from "../controllers/AccountInvController";

const router = Router();

router.get("/accounts", AccountInvController.getAllAccounts);
router.get("/accountdetails", AccountInvController.getDetailAccounts);
router.get("/transactions", AccountInvController.getAllTransactions);
router.get("/payors", AccountInvController.getDistinctPayors);
router.get("/invoices", AccountInvController.getAllInvoices);
router.delete("/transactions/:id", AccountInvController.deleteOneTransaction);
router.post(
  "/transactions/deleteMany",
  AccountInvController.deleteManyTransactions
);
router.post("/transactions", AccountInvController.addTransaction);
router.post("/maninvoices", AccountInvController.addManInvoice);
// router.post('/insert', AccountInvController.insertOne)
export default router;
