import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineHome, AiOutlineProject, AiOutlineMail} from "react-icons/ai"
import menu from '../../public/images/menu.png'
import close from '../../public/images/close.png'
import logo from '../../public/images/logo1.png'
import logo1 from '../../public/images/logo4.png'
import Cart from '../../public/images/shopping-cart.png'
import { CartContext } from '../pages/CartPAGES/AddCartContext'


import {GrProjects} from "react-icons/gr"


import { SidebarContext } from '../pages/CartPAGES/CartContext'

const Navbar = () => {

    const {itemAmount} = useContext(CartContext)


    const [nav, setNav] = React.useState(true)
    const handleNav = () => {
        setNav(!nav) 

    }

    const {isOpen, setIsOpen,} = React.useContext(SidebarContext)
    
    
  return (
    <div 
    
    className=' fixed w-full z-[90]  shadow-md shadow-black-200 top-0' >
     
        {nav ? <img src={menu} onClick ={handleNav} className='absolute top-4 right-4  z-[99] hover:scale-110 ease-in duration-200 cursor-pointer md:hidden' width='44px'></img> :  <img src={close} onClick={handleNav} className='absolute top-4 right-4 z-[99] hover:scale-110 duration-200 cursor-pointer md:hidden ' width='44px'></img> }
        {
            nav ?
            <div className='flex justify-start items-center bg-white z-20  md:hidden '>
                <img src={logo} width='88px'></img>
            </div>

            :

            <div className='flex flex-col justify-center items-center w-full  h-screen md:hidden bg-slate-200 ' >
              
              <Link to='/'  className='w-[44%] h-20 flex flex-col justify-center items-center hover:scale-110 duration-300  border-b-2 border-y-stone-800 hover:bg-slate-300 cursor-pointer mb-4 '>
                <AiOutlineHome  size={44}/><span>Home</span>
              </Link>
              
              <Link to='/' smooth={true} onClick={() => setIsOpen(!isOpen)}   className='w-[44%] h-20 flex flex-col justify-center items-center hover:scale-110 duration-300  border-b-2 border-y-stone-800 hover:bg-slate-300 cursor-pointer mb-4'>
                <AiOutlineProject  size={44}/><span>Cart</span>
              </Link>

              <Link to='/categories'  className='w-[44%] h-20 flex flex-col justify-center items-center hover:scale-110 duration-300  border-b-2 border-y-stone-800 hover:bg-slate-300 cursor-pointer mb-4'>
                <GrProjects to='/categories' className='' size={35}/><span>Categories</span>
              </Link>

              <div className='w-[44%] h-20 flex flex-col justify-center items-center hover:scale-110 duration-300  border-b-2 border-y-stone-800 hover:bg-slate-300 cursor-pointer mb-4'>
                <AiOutlineMail  className='' size={44}/><span>Contact</span>
              </div>
            </div>

            
        }

        <div className='md:block shadow-lg hidden  w-full z-1'> 

          
            <div className='flex justify-between items-center  w-[100%] '>
            
            <div className='w-[44%] md:w-[32%] md:mr-16  flex justify-end lg:w-[25%] xl:w-[25%]'>
              <Link to='/' ><img src={logo1} width='143px' className='hover:scale-125 duration-300 p-2'></ img></Link>
            </div>

              <div className='flex justify-center items-center  w-[92%] md:w-[80%] md:justify-center font-serif  h-full lg:justify-center lg:w-[60%] xl:w-[56%]'>
              <Link to='/create'  className='font-bold p-4'>Create Product</Link>
                <Link to='/categories'  className='font-bold p-4'>Categories</Link>
                <Link to='/'  className='font-bold p-4'>Product Shop</Link>
                <Link onClick={()=> setIsOpen(!isOpen)}
                className='pr-4 mr-4 hover:scale-105 duration-200 relative' >
                <img   width='44px'  src={Cart}></img>
         <div className='absolute -top-2 right-0 bg-red-600 w-5  h-5 rounded-full text-white   flex justify-center items-center'>{itemAmount }</div>
                </Link>
                
              </div>
        
            </div>
        </div>

    </div>
  )
}

export default Navbar
