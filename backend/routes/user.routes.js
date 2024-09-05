import express  from "express";
import geminiRes from "../utils/gemini.js";



const router = express.Router();


router.post('/geminires',geminiRes);


export default router;