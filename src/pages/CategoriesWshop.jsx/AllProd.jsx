import React from 'react'

const AllProd = (props) => {
    
  const {id, img, price, productName} = props.data
  return (
    <div className='grid grid-cols-1 border-2 p-2 border-gray-300 hover:border-gray-800 rounded-sm hover:scale-110 duration-300'>
    <div className='flex justify-center items-center'>
        <Link><img className='rounded-md' src={img}></img></Link>
    </div>
    
    <div className='text-center'>
        <span className='text-sm font-bold '>{productName}</span><br></br>
        <span>${price}</span>
    </div>
    </div>
  )
}

export default AllProd
