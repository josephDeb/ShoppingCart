import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  SidebarContext  from './pages/CartPAGES/CartContext.jsx'
import CartContext from './pages/CartPAGES/AddCartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

 
      <SidebarContext>
        <CartContext>
            <React.StrictMode>  
              <App />
            </React.StrictMode>
        </CartContext>
       </SidebarContext>
  
)
