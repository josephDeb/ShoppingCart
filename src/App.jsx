
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Footer from './components/Footer'

import Navbar from './components/Navbar.jsx'

import MainHomePage from './components/MainHomePage'

import Categories from './components/Categories/Categories'
import Create from './components/Create'


function App() {

 
  

  return (
    <>
        <div>
          <Router>
            <Navbar />
      
            
              <Routes>
                  <Route path='/' element={<MainHomePage />}/>
                  
                  <Route path='/categories' element={<Categories />}/>

                  <Route path='/create' element={<Create />}/>
            
                  
                
              </Routes>

            <Footer />
          </Router>
              
        </div>
    </>
  )
}



export default App
