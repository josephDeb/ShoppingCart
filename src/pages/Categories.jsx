import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='flex justify-center items-center w-full pt-44 relative'> 

        <AiOutlineArrowLeft className='absolute left-1 hover:scale-125 duration-200 md:left-28'/>
        <div className='flex justify-center items-center'>

        <button className='border-2 hover:bg-slate-300 hover:border-black duration-200 font-semibold  p-1 '>All</button>
          
            <button className='border-2 hover:bg-slate-300 hover:border-black duration-200 font-semibold  p-1 '>Electronics</button>

            <button className='border-2 hover:bg-slate-300 hover:border-black duration-200 font-semibold  p-1 '>Appliances</button>
            
            <button className='border-2 hover:bg-slate-300 hover:border-black duration-200 font-semibold  p-1 '>Accesories</button>
            
            <button className='border-2 hover:bg-slate-300 hover:border-black duration-200  p-1  font-semibold'>Kitchen</button>
            
            <AiOutlineArrowRight className='absolute right-1 hover:scale-125 duration-200 md:right-28'/>
        </div>
        
    </div>
  )
}

export default Categories
