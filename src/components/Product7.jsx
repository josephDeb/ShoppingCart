
import DataGym from '../Data/DataGym'
import Shop7 from "../pages/Shop3"

const Product6 = () => {
  return (
    <div className='w-full flex justify-center items-center mt-28 pb-16  relative'>


        <div className='absolute left-4 top-[-6%] md:top-[-9%] lg:top-[-17%] font-semibold uppercase underline'>Gym</div>

        <div className='grid grid-cols-2 gap-4  justify-center  w-[80%] md:grid md:grid-cols-3 md:gap-5 lg:grid-cols-5'>{DataGym.map((prod, index) => {
            return <Shop7 key={index} data={prod}/>
            
        })}</div>
       
       
        
    </div>
  )
}

export default Product6

