import express from "express";
import {contribute }from "../controller/contribute.js";

const router = express.Router();

router.post("/",contribute)

export default router;