import React from 'react'
import bg from '../../public/images/background.jpg'

const ShopNow2 = () => {
  return ( 
    <div className='flex flex-col md:flex-row-reverse justify-center items-center p-4' >
        <div className='w-[100%] flex justify-center md:w-[48%] lg:w-[%]'>
         <img className='w-[88%] rounded-sm' src={bg}></img>
        </div>

        <div className='w-[88%] md:w-[42%]'>
            <h1 className='font-bold text-2xl'>Create Harmonius Living</h1>
            <p className='text-sm text-black-800 font-semibold w-[90%] pt-3 pb-2'>ROAUF Products are all made to standard sizes and good quality so that you can mix and match them freely togother</p>
            <button className='p-1 bg-black text-white font-semibold px-2'>SHOP NOW</button>
        </div>

    </div>
  )
}

export default ShopNow2
