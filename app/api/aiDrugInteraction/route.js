// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);



// export const GET = async (request) => {
//     try {


//       const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" }); 
      
      
//       const prompt = `does mixing alcohol and opioids`;
    
//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       const text = await response.text();

//       return new Response(text, { status: 200 })


//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: "Error while generating response from gemini",
//         error: error.message
//       });
//       return new Response("Error while generating response from gemini", { status: 500 })

//     }
//   };
  


import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export const POST = async (request) => {
    try {
        // Check for API key existence
        if (!process.env.API_KEY) {
            throw new Error("API key is missing");
        }

        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        
        const prompt = `does mixing alcohol and opioids`; 

        const result = await model.generateContent({ prompt });
        const response = await result.response;

        // console.log(`prompt: ${prompt}`);
        // console.log(`result : `+result);

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        // Extract the text from the response
        const text = await response.text();

        console.log(`text: ${text}`);

        // Return the generated text as a response
        return new Response(JSON.stringify({
            success: true,
            text: text,
        }), { status: 200 });

    } catch (error) {
        // Log the error to see details
        console.error("Error generating response from Google Generative AI:", error.message);

        // Return an error response with detailed message
        return new Response(JSON.stringify({
            success: false,
            message: "Error while generating response from gemini",
            error: error.message
        }), { status: 500 });
    }
};

