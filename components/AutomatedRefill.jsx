'use client';
import React, { useState } from 'react'
import { Input } from './ui/input'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import axios from 'axios';

const AutomatedRefill = () => {


    const [value,setValue] = useState("");

    const [items,setItems] = useState([]);



  
    // const items = 
    
      const handleOnSearch = async(string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // console.log(string, results);

        // const getGeminiRes = async () => {
            try {
                

                const prompt = `make the list of names of medicine starting with "${value}" separated with comas and limit to 5 names and dont write anything unnecessary like intro`;
        
                const response = await axios.post(
                  `http://localhost:4000/user/geminires`,
                  {
                    prompt: prompt,
                  }
                );


            } catch (error) {
                    return;
            }

            
             
        
     


      }
    
      const handleOnHover = (result) => {
        // the item hovered
        // console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        // console.log(item)
      }
    
      const handleOnFocus = () => {
        // console.log('Focused')
      }
    
   
    
      return (
        <div >
          <header >
            <div  className='w-[50%]'>
              <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                // formatResult={formatResult}
              />
            </div>
          </header>
        </div>
      )
  
}

export default AutomatedRefill