import express  from "express";
import geminiRes from "../utils/gemini.js";
// import {autoRefill} from "../utils/gemini.js";



const router = express.Router();


router.post('/geminires',geminiRes);
// router.post('/autorefill',autoRefill);


export default router;