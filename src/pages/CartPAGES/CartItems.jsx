import React, { useContext } from 'react'
import {IoMdClose} from 'react-icons/io'
import { CartContext } from './AddCartContext';
import { Link } from 'react-router-dom';
import {BsEyeFill} from 'react-icons/bs'
const CartItems = (props) => {

    const {id, img, price, productName, amount} = props.items;

    const cost = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price);

    const {cart,removeFromCart,amountIncrease,amountDecrease} = useContext(CartContext)

    const total2 = amount * price

    

    const totals = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(total2);

    console.log(cart)

  return (
   
        <div className='border-2 border-black px-2 rounded-md w-[88%]   h-[26%] md:w-[88%]  relative'>

            <div className='w-full h-full flex justify-start items-center relative'>
                <IoMdClose onClick={() => removeFromCart(id)} className='absolute top-1 right-0 font-semibold w-5 text-center text-black hover:text-red-600 cursor-pointer'/>

                
                <div className='relative h-[100%] w-[24%]'>
               
                <Link to='/categories'><img src={img} className='relative w-full h-full cursor-pointer py-1 object-fill'></img>
                
                </Link>

                <Link className='opacity-0 hover:opacity-100' to='/categories'><div className='absolute top-0  bg-white/40  flex justify-center items-center w-full h-full cursor-pointer'>
                <BsEyeFill className='w-8 h-8'/></div></Link>
                
                </div>

                    <div className='flex justify-center px-2  flex-col items-start h-full border-2'>
                        <h1 className='text-xl font-semibold'>{productName}</h1>
                        <span className='mb-2 font-bold '>$ {cost}</span>

                        <div className=' flex justify-between items-center  h-6 w-24 md:w-20'>
                            <button onClick={() => amountIncrease(id)} className=' bg-black max-h-6 flex justify-center items-center font-extrabold w-14 text-white hover:bg-red-600'>+</button>
                            <input value={amount} className='w-full  h-full text-center p-1 font-semibold border-2 border-black'></input>
                                <button onClick={() => amountDecrease(id)} className=' bg-black max-h-6 flex justify-center items-center font-extrabold w-14 text-white hover:bg-red-600'>-</button>
                    </div>
                </div>

                    <div className='absolute right-3 bottom-2 w-[40%] flex justify-end items-end text-lg font-bold text-red-600'>
                        <span>{amount}x : $ {totals}</span>
                    </div>

                        
                </div>
               
            </div>
 
  )
}

export default CartItems
