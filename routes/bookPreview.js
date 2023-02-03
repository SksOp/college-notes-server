import { bookpreview } from "../controller/bookPreview.js";
import express  from "express";

const router =  express.Router();

router.get("/:id",bookpreview);

export default router;