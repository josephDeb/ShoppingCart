import React from 'react'
import { CartContext } from '../../pages/CartPAGES/AddCartContext'
import ViewItemCart from './ViewItemCart'
import Product from '../Product'
import Product2 from '../Product2'
import Product3 from '../Product3'
import Product4 from '../Product4'
import Product5 from '../Product5'
import Product6 from '../Product6'
import Product7 from '../Product7'
import Cart from '../../pages/CartPAGES/Cart'
import Choices from './Choices'
import Slider from 'react-slick'

const Categories = () => {


    
    const {cart, setCart} = React.useContext(CartContext) 

  
  return (




    <div className={`h-full w-full flex flex-col justify-center items-center pt-16 relative`}>
       
       <Cart />
        

        <div className='flex justify-center items-center flex-col'>
            {cart.map((item) => {

                return <ViewItemCart data={item} key={item.id}/>
            })}
        </div>
        
       <Choices />      
       <Product />
       <Product2 />
       <Product3 />
       <Product4 />
       <Product5 />
       <Product6 />
       <Product7 />
       
    </div>
  )
}

export default Categories