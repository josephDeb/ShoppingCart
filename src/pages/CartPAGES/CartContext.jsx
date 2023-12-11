import React, {useState, createContext} from 'react'

export const SidebarContext = createContext();

const CartProvider = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
      setIsOpen(false)
  }

  

  console.log(handleClose)
  
  return  <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>{children}</SidebarContext.Provider>
}

export default CartProvider
