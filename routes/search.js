import express  from "express";
import { keywordSearch } from "../controller/search.js";

const router =  express.Router();

//

router.get("/:keyword",keywordSearch);
router.post("/",keywordSearch);

export default router;