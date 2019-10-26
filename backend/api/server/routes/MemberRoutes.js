//import { Router } from "express";
const express = require("express");
var router = express.Router();
//import MemberController from "../controllers/MemberController";
const MemberController = require("../controllers/MemberController");

//const router = Router();

router.get("/", MemberController.getAllMembers);
router.get("/getTherapists", MemberController.getActiveTherapists);
router.post("/addmember", MemberController.addMember);
//export default router;

module.exports = router;
