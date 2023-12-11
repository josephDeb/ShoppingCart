

const Footer = () => {
  return (
    <div className='relative w-full h-44  xl:border-2 lg:border-2 md:border-2 border-transparent '>
      <div className='absolute -top-3 left-[28%] hover:-top-32 transition-all duration-700'>
          <img src='../../images/ehpaanokung2.png'></img>
      </div>

        <div className='h-44 pt-4 w-full bg-black mt-20 relative z-[10] border-4 border-black'>
        <div className='text-center '>
            <h1 className='text-white font-extrabold text-3xl'>Newsletter</h1>
            <div>
              <input className='border-red-500 pl-2 ' placeholder='Your@email.com'></input>
              <button className='bg-white pl-2 pr-2 m-3  font-semibold'>Subscirbe</button>
            </div>

            
        </div>

        <div className='text-white flex justify-center items-center  text-sm  gap-2'>
              <p>About</p>
              <p>Store Locator</p>
              <p>FAQs</p>
              <p>News</p>
              <p>Career</p>
              <p>Contact Us</p>
        </div>

        <h1 className='text-red-800 font-semibold text-center h-12 xl:text-2xl'>Joseph dat Dev</h1>
     </div>
    </div>
    
  )
}

export default Footer
