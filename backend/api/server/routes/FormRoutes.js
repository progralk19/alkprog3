import { Router } from "express";
import FormController from "../controllers/FormController";

const router = Router();

router.get("/", FormController.getAllForms);

export default router;
