import React, {useState, useEffect, createContext} from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((accumolator, currentItem) => {
      return accumolator + currentItem.price * currentItem.amount;
    }, 0)
    setTotal(total)
  })

  useEffect(() => {
    const amount = cart.reduce((accumolator, currentItem) => {
        return accumolator + currentItem.amount
    }, 0)
    setItemAmount(amount)
  }, [cart]);
  

  const handleBtn = (data, id) => {

      const newItem = {...data, amount: 1}
      const cartItem = cart.find((item) => {
        return item.id === id;
      });
      console.log(cartItem)
      if(cartItem) {
        const newCart = [...cart].map(item=> {
          if (item.id === id) {
            return {...item, amount: cartItem.amount + 1}
          } else {
            item
          }
        });
        setCart(newCart)

      } else {
        setCart([...cart, newItem])
      }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
      setCart(newCart);
  };

  const clearCart = () => {
    setCart([])
  }

  
  
  const amountIncrease = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    handleBtn(cartItem, id)
    
  }

  const amountDecrease = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    });

    if(cartItem) {
      const newCart = cart.map((item) => {
        if(item.id === id) {
          return {...item, amount: cartItem.amount - 1}
        }
      });
      setCart(newCart);
    } 
      if (cartItem.amount < 2) {
        removeFromCart(id)
      }
    
  }



  

  
 

  
  
  return  <CartContext.Provider value={{cart,removeFromCart,setCart,handleBtn,clearCart,amountIncrease,amountDecrease,itemAmount,total}}>{children}</CartContext.Provider>
}

export default CartProvider
