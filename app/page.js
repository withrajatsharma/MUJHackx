'use client';

// import Image from "next/image";
import axios from "axios";

export default function Home() {



const getGeminiRes = async () => {

  
  try {
    
    const prompt = "hii";

    const response = await axios.post(`http://localhost:4000/user/geminires`, {
      prompt: prompt
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
      <button onClick={getGeminiRes}>
        click to get response
      </button>
    </div>
  );
}
