import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const page = () => {
  return (

    <main className='h-screen w-full pt-10 pl-32'>

        <div className='bg-[#282796] p-8 w-[60%] h-[200px] rounded-2xl relative'>
                    <div className='bg-gray-500 text-white flex justify-center items-center text-4xl rounded-full w-32 h-32 absolute right-0 translate-x-1/2 -translate-y-1/2 top-1/2'>
                            R
                    </div>

                <div className=' text-white flex flex-col justify-between h-full'>
                    <h1 className='text-2xl font-bold '>
                        Adam Green
                    </h1>

                    <div>
                        <p>Neurologist</p>
                        <p className='text-sm  opacity-60 pt-1'>neurophysiologis MD PHD</p>
                    </div>

        <p className='opacity-80'>
        2002 - beginning the medical career 
        </p>

                </div>
                    

        </div>

    </main>

    )
}

export default page