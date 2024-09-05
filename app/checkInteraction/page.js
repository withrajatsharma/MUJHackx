"use client";

import axios from "axios";
import { useState } from "react";
import { MdAdd, MdClose } from 'react-icons/md'



import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"




export default function Home() {

    const [tags,setTags] = useState([]);

            const [inputValue, setInputValue] = useState("");
    
            const handleInputChange = (e) => {
                // e.preventDefault();
                setInputValue(e.target.value);
                // console.log(`inputValue: ${inputValue}`);
            };
    
            const addNewTag = () => {
                if (inputValue.trim() !== "") {
                    setTags([...tags, inputValue.trim()]);
                    setInputValue("");
                }
            };
    
            const handleKeydown = (e) => {
                // e.preventDefault();
                if (e.key === "Enter") {
                   tags.length<5&&addNewTag();
                }
            };
    
            const handleRemoveTag = (tagToRemove) => {
                setTags(tags.filter((tag)=> tag!==tagToRemove))
            };

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

  const handleSubmit = (e)=>{
    e.preventDefault();
    return;
  }



  return (
    <div className=" w-full h-screen  flex justify-center items-center">

        {/* <Button onClick={getGeminiRes}>click to get response</Button>
        {
          response&&<h1>{response}</h1>
        } */}


        <Card className="w-[30%]">
      <CardHeader>
        <CardTitle>Check Medicine Interaction</CardTitle>
        <CardDescription>select multiple medicines to find out about their compatibility.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">

                
                <div  className="flex items-center gap-2 flex-col justify-between">
                {/* <Label htmlFor="name">{medicine} {index+1}</Label> */}


                {tags && (<div className='flex flex-col w-full items-center gap-2 flex-wrap mt-2'>
             {
                tags.map((tag,index)=>(
                    <span key={index} className=' h-10 flex justify-between w-full items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded'>
                        {tag}
                        <button onClick={()=>{handleRemoveTag(tag)}}>
                            <MdClose/>
                        </button>
                    </span>
                ))
            }
        </div>)}






                <div className=" w-full flex gap-4 pt-4">
                <Input 
                    value={inputValue}
                 placeholder='Add Medicine'
                                 onChange={handleInputChange}
                                 onKeyDown={handleKeydown}
                className="w-full"  />

<button
            onClick={()=>{
                tags.length<5&&addNewTag();
            }}
            className=' group w-10 bg-zinc-400 flex items-center justify-center rounded border '>
                <MdAdd className=" text-2xl text-white  group-hover:text-white"/>
            </button>

                </div>
                
              </div>
            



           
           
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Add</Button>
      </CardFooter>
    </Card>


    </div>
  );
}




// "use client";

// import React, { useState } from 'react'

// const TagInput = () => {

//       

//   return (
//     <div>

//       

//         <div className=' flex items-center gap-4 mt-3'>
//             <input type="text"
//                 className=' text-sm bg-transparent border px-3 py-2 rounded outline-none'
//                 
//                
//             />

//            
//         </div>
//     </div>

//   )
// }

// export default TagInput