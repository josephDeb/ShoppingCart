
import { Link } from "react-router-dom"
import Appliances from '../../public/images/livingRoom.jpg'
import fuji from '../../public/images/electronics.jpg'
import sydney from '../../public/images/kitchen.jpg'
import Gieran from '../../public/images/skincare.jpg'



const Main= () => {
  return (
    <div   className='flex justify-center items-center pt-36 md:pt-44 lg:pt-48 '>
        <div className='grid grid-cols-3 gap-3 md:gap-4 lg:gap-5 xl:gap-5  w-[88%] md:w-[62%] lg:w-[53%]  h-full'>
            <div>
                <Link className='relative'><img className='w-full h-full rounded-md hover:scale-110 duration-150 brightness-50 hover:brightness-75 ' src={Appliances}></img>
                
                </Link>
            </div>

            <div>
                <Link className='relative'><img className='w-full h-full rounded-md hover:scale-110 duration-150 brightness-50 hover:brightness-75' src={Gieran} ></img>
                
                </Link>
            </div>
            
            
            <div className='grid grid-cols-1 gap-2 md:gap-3 justify-center items-center h-full'>
                 <Link className='relative h-full'><img className='w-full h-full rounded-md hover:scale-110 duration-150 brightness-50 hover:brightness-75' src={fuji}></img>
                 
                 </Link>


                 <Link className='relative h-full'><img className='w-full h-full rounded-md hover:scale-110 duration-150 brightness-50 hover:brightness-75' src={sydney}></img>
                 
                
                 </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Main
