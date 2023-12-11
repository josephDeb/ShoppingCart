
import DataAccesories from '../Data/DataAccesories'
import Shop3 from "../pages/Shop3"

const Product3 = () => {
  return (
    <div className='w-full flex justify-center items-center mt-28 pb-16 border-b-slate-600 border-b-2 relative'>


        <div className='absolute left-4 top-[-6%] md:top-[-9%] lg:top-[-17%] font-semibold uppercase underline'>Skincare</div>

        <div className='grid grid-cols-2 gap-4  justify-center  w-[80%] md:grid md:grid-cols-3 md:gap-5 lg:grid-cols-5'>{DataAccesories.map((prod, index) => {
            return <Shop3 key={index} data={prod}/>
            
        })}</div>
       
 
    </div>
  )
}

export default Product3

