import React, { Component } from "react";

import DataAllProducts from "../Data/DataAllProducts";

import Home from "../pages/HomePages";



const HomePage2 = () => {



  return (
    <div className='w-full flex justify-center items-center mt-28 mb-16 relative md:mt-44'>

        <h1 className="text-black absolute -top-11 left-4 font-semibold uppercase underline">Products we are proud of</h1>

         <div className='grid grid-cols-2 gap-4  justify-center  w-[80%] md:grid md:grid-cols-4 md:gap-3 lg:grid lg:grid-cols-5 lg:gap-6 xl:grid xl:grid-cols-6 xl:gap-7'>{DataAllProducts.map((prod) => {
            return <Home key={prod.id} data={prod}/>
            
           })}
          </div>
        
    </div>
  )
}

export default HomePage2
