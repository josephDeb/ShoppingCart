import React, {useContext} from 'react'
import { CartContext } from './CartPAGES/AddCartContext'
import {BsPlus, BsEyeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Home = (props) => {

  const {id, img, price, productName, data} = props.data

  const product = props.data
  

  const {cart, setCart, handleBtn} = useContext(CartContext)


      



  const cost = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price);


  return (
    <div className='grid grid-cols-1  p-2 border-gray-300 border-2 hover:border-gray-800 rounded-sm hover:scale-110 duration-300 h-[100%] w-full relative '>
      
      <div className='absolute w-full h-[71%] opacity-0 -left-6 hover:opacity-100 hover:left-0 transition-all duration-200'>

        <div onClick={()=> handleBtn(product)} className='bg-red-600 text-xl   flex justify-center items-center w-8 h-8 border-2 border-black my-1 cursor-pointer '>
          <BsPlus/>
        </div>

        <Link to='/categories'><div className='bg-white  flex justify-center items-center w-8 h-8 border-2 border-black cursor-pointer'>
          <BsEyeFill/>
        </div></Link>

      </div>

    <div className=' flex justify-center items-center cursor-pointer'>

        <img className='rounded-md p-1  w-full ' src={img}></img>
        
    </div>

  
    <div className='text-between'>
        <span className='text-sm font-semibold'>{productName}</span><br></br>
        <span className='font-bold'>${cost}</span>
        
    </div>

    <button onClick={()=> handleBtn(product)} className='font-semibold bg-amber-500 text-zinc-50 rounded-sm cursor-pointer p-1 mt-2'>Buy Now</button>
  </div>
  )
}

export default Home
