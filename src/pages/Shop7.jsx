import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {BsPlus, BsEyeFill} from 'react-icons/bs'

import { CartContext } from './CartPAGES/AddCartContext'

const Shop7 = (props) => {

  const {cart, setCart, handleBtn,clearCart,amountIncrease,total} = useContext(CartContext)

  const {id, img, price, productName, btn} = props.data

  const product = props.data
  
  
  
  const cost = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price);


  
  return (


        <div className=' grid grid-cols-1  p-2 border-gray-300 border-2 hover:border-gray-800 rounded-sm hover:scale-110 duration-300 h-full w-full relative'>
        
        <div className='absolute w-full h-[71%] opacity-0 -left-6 hover:opacity-100 hover:left-0 transition-all duration-200'>

        <div onClick={()=> handleBtn(product)} className='bg-red-600 text-xl   flex justify-center items-center w-8 h-8 border-2 border-black my-1 cursor-pointer '>
          <BsPlus/>
        </div>

        <Link to='/categories'><div className='bg-white  flex justify-center items-center w-8 h-8 border-2 border-black cursor-pointer'>
          <BsEyeFill/>
        </div></Link>

      </div>

        <div className='flex justify-center items-center h-[88%] w-[100%] cursor-pointer'>
            <img className='rounded-md h-full w-full' src={img}></img>
            
        </div>

      
        <div className='text-between'>
            <span className='text-sm font-semibold'>{productName}</span><br></br>
            <span className='font-bold'>${cost}</span>
            
        </div>

        <button className='font-semibold bg-amber-500 text-zinc-50 rounded-sm cursor-pointer p-1 mt-2'>Buy Now</button>
        
    </div> 
  )
}

export default Shop7
