import React from 'react'
import { useState,createContext } from 'react';
import { PRODUCTS } from '../products';
//Use to keep track of state and fuction which will be used all over  the project
export const ShopContext=createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<=PRODUCTS.length;i++){
         cart[i]=0
    }
    return cart;
};
const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart());
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }  
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    } 
    const updateCartItemCount=(newAmount,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}));
    } 
    const getTotalCartAmount=()=>{
      let totalAmount=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
          totalAmount+=cartItems[item]*itemInfo.price;
        }
      }
      return totalAmount;
    };

    //Things needed to be shared globally accross the project
    const contextValue={cartItems,addToCart,removeFromCart,updateCartItemCount,updateCartItemCount,getTotalCartAmount,getTotalCartAmount};

//passing global things...
// console.log(cartItems)    
  return <ShopContext.Provider value={contextValue} >
    {props.children}
  </ShopContext.Provider>
}

export default ShopContextProvider
