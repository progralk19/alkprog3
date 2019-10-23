import { Router } from "express";
import MemberController from "../controllers/MemberController";

const router = Router();

router.get("/", MemberController.getAllMembers);
router.get("/getTherapists", MemberController.getActiveTherapists);
router.post("/addmember", MemberController.addMember);
export default router;
