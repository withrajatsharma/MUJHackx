import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);



const geminiRes = async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const prompt =  req.body.prompt;

    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
   
    res.status(200).json({
      success: true,
      message: text,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while generating response from gemini",
      error: error.message
    });
  }
};

export default geminiRes;