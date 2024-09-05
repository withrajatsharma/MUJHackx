"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

export default function Home() {

  const [response,setResponse] = useState(null);

  const getGeminiRes = async () => {
    try {
      const prompt = "hii";

      const response = await axios.post(
        `http://localhost:4000/user/geminires`,
        {
          prompt: prompt,
        }
      );

      // console.log(response.data.message);
      setResponse(response.data.message);
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  };

  return (
    <div>

        <Button onClick={getGeminiRes}>click to get response</Button>
        {
          response&&<h1>{response}</h1>
        }


      {/* <button >click to get response</button> */}
    </div>
  );
}
