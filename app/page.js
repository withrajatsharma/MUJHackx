'use client';

// import Image from "next/image";

export default function Home() {



const getGeminiRes = async () => {

  const response = await fetch(`/api/aiDrugInteraction`);
  // const data = await response.json();

  console.log(response);

};

  
  return (
    <div>
      <button onClick={getGeminiRes}>
        click to get response
      </button>
    </div>
  );
}
