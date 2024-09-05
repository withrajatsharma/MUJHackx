"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";

export default function Home() {
  const getGeminiRes = async () => {
    try {
      const prompt = "hii";

      const response = await axios.post(
        `http://localhost:4000/user/geminires`,
        {
          prompt: prompt,
        }
      );

      console.log(response.data.message);
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  };

  return (
    <div>

        <Button>jisdpfjid</Button>

      {/* <button onClick={getGeminiRes}>click to get response</button> */}
    </div>
  );
}
