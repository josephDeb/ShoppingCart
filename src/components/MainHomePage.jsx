
import HomePage2 from '../components/HomePage'
import ShopNow from '../components/ShopNow'
import ShopNow2 from '../components/ShopNow2'
import Relevant from '../components/Relevant'

import Main from '../components/Main'

import Cart from '../pages/CartPAGES/Cart'



const MainHomePage = () => {
  return (
    <div>
        
        <Main />
        <Cart/>
        
        <HomePage2 />
        <ShopNow />
        <Relevant />
        <ShopNow2 />
    </div>
  )
}

export default MainHomePage
