
import DataRelevant from '../Data/DataRelevant'
import ShopRelevant from "../pages/ShopRelevant"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"


const Relevant = () => {
  return (
    <div>
    <div className='w-full flex justify-center items-center mt-28 mb-16 relative'>
    <div className='absolute left-3 top-[-8%] lg:top[-16%] xl:top-[-18%] xl:left-7 font-semibold uppercase underline'>Relevant</div>
        <AiOutlineArrowLeft className='absolute left-2 hover:scale-150 duration-300 cursor-pointer md:left-8'/>

    <div className='grid grid-cols-2 gap-4  justify-center  w-[78%] md:grid md:grid-cols-3 md:gap-5 lg:grid-cols-5 xl:grid-cols-5'>{DataRelevant.map((prod,index) => {
        return <ShopRelevant key={index} data={prod}/>
        
    })}</div>
    <AiOutlineArrowRight className='absolute right-2 hover:scale-150 duration-300 cursor-pointer md:right-8' />
</div>
</div>
  )
}

export default Relevant
