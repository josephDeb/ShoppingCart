
import DataAppliances from '../Data/DataAppliances'
import Shop2 from "../pages/Shop2"

const Product2 = () => {
  return (
    <div className='w-full flex justify-center items-center mt-28 relative pb-16 border-b-slate-600 border-b-2'>
      
      <div className='absolute left-4 top-[-6%] md:top-[-9%] lg:top-[-17%] font-semibold uppercase underline'>Kitchen</div>

        <div className='grid grid-cols-2 gap-4  justify-center  w-[80%] md:grid md:grid-cols-3 md:gap-5 lg:grid-cols-5'>{DataAppliances.map((prod, index) => {
            return <Shop2 key={index} data={prod}/>
            
        })}</div>

    </div>
  )
}

export default Product2
