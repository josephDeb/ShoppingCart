import React from 'react'
import Cart from '../../pages/CartPAGES/Cart';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../pages/CartPAGES/CartContext';

const ViewItemCart = (props) => {
    const {id, img,productName} = props.data;

   
    const [click, setClick] = React.useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const {isOpen, setIsOpen, handleClose} = React.useContext(SidebarContext)

  
  return (
    <div className='mt-8 w-full h-full px-2 py-8'>

     <div className='w-full h-full flex justify-center flex-col '>

       <div className='flex justify-center flex-col items-center'>
         <img src={img} className='max-w-[71%] md:max-w-[62%] lg:max-w-[40%] hover:scale-125 duration-300'></img>
       </div>
    
       <div className='mt-16 flex justify-center gap-8 items-center'>
          <span className='text-xl font-semibold'>{productName}</span>

         <Link onClick={()=> setIsOpen(!isOpen)} > <button  className='font-semibold bg-amber-500 text-zinc-50 rounded-sm cursor-pointer px-8 py-2 hover:scale-110 duration-200 active:bg-yellow-400'>Buy Now</button></Link>
       </div>
     </div>
        
    
    </div>
  )
}

export default ViewItemCart
