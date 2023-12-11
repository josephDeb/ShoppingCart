import React, { useContext } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import {FiTrash2} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { SidebarContext } from './CartContext'
import { CartContext } from './AddCartContext'
import CartItems from './CartItems'

const Cart = () => {    

    const {isOpen, setIsOpen, handleClose} = useContext(SidebarContext)

    const {cart, setCart, handleBtn,clearCart,amountIncrease,total} = useContext(CartContext)

  

    const price = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(total);

    

  return (

    
         <div className={`${isOpen ? 'right-0 transition-all duration-300' : '-right-full transition-all duration-300'} flex flex-col justify-between    w-full z-[99]  bg-white fixed top-0  h-full shadow-xl md:w-[48vw] lg:w-[44vw] xl:w-[35vw]  md:bg-white md:border-2`}>


            <div className='pt-4 pb-3 w-full flex justify-between items-center px-4 md:pt-6 relative shadow-lg'>

            <div onClick={handleClose} className='md:absolute md:top-2 md:left-4 cursor-pointer hover:scale-125 duration-200'>
                    <AiOutlineArrowRight className='text-xl' />
                </div>


                <div className='text-xl font-semibold uppercase md:text-xl'>
                    <span>Shopping bag ( 0 )</span>
                </div>
            
               

                <Link to='/checkout'><button className='p-2 px-3 rounded-md bg-green-500 text-white hover:scale-110 duration-200 font-semibold'>CHECKOUT</button>
                </Link>
            </div>

          <div className=' flex justify-center  flex-col items-center gap-3 overflow-y-auto overflow-x-hidden border-b h-[74%]  border-y-gray-200'>{cart.map((item) => {               
                return <CartItems items={item} key={item.id}/> 
            })}


            

         </div>

         <div className=' w-full flex justify-between items-center h-[5%] px-2 pb-4'>
                <span className='text-lg font-bold text-green-600 pb-2'>Total: $ {price}</span>

                <div onClick={clearCart} className='text-white text-xl bg-red-600 p-2  w-12 h-12 flex justify-center items-center cursor-pointer hover:scale-125 duration-200'>
                <FiTrash2 />
                </div>
            </div>
            

    </div>

   
  )
}

export default Cart
