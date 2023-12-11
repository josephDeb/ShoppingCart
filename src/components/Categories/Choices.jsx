import React from 'react'
import {IoMdArrowDropleft, IoMdArrowDropright} from 'react-icons/io'

const Choices = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full pt-16 relative '> 

    
        <div className='grid grid-cols-4 justify-center items-center gap-2 md:gap-2 lg:gap-3 text-sm'>

        <button className='border-2 hover:bg-slate-300 hover:border-black duration-200 font-semibold  p-1 '>All</button>
          
            <button className='border-2 hover:bg-slate-300 hover:border-black duration-200 font-semibold  p-1 '>Electronics</button>

            <button className='border-2 hover:bg-slate-300 hover:border-black duration-200 font-semibold  p-1 '>Kitchen</button>
            
            <button className='border-2 hover:bg-slate-300 hover:border-black duration-200 font-semibold  p-1 '>Skincare</button>
            
            <button className='border-2 hover:bg-slate-300 hover:border-black duration-200  p-1  font-semibold'>Chairs</button>
            
            <button className='border-2 hover:bg-slate-300 hover:border-black duration-200 font-semibold  p-1 '>Clothes</button>

            <button className='border-2 hover:bg-slate-300 hover:border-black duration-200 font-semibold  p-1 '>Shoes</button>

            <button className='border-2 hover:bg-slate-300 hover:border-black duration-200 font-semibold  p-1 '>Gym</button>
        </div>

        
        
    </div>
  )
}

export default Choices