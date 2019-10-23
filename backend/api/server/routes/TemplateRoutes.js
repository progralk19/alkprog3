import { Router } from "express";
import TemplateController from "../controllers/TemplateController";

const router = Router();

router.get("/templates", TemplateController.getAllTemplates);

export default router;
