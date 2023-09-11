import React from 'react'
import { useState,createContext ,useEffect} from 'react';
import { PRODUCTS } from '../products';
//Use to keep track of state and fuction which will be used all over  the project
export const ShopContext=createContext(null);
const getDefaultCart=()=>{
  //Will return an array with index as product and value as number of product
    let cart={};
    for(let i=1;i<=PRODUCTS.length;i++){
         cart[i]=0
    }
    // console.log(cart);
    
    return cart;
};
JSON.parse(localStorage.getItem('storedList'))
const ShopContextProvider = (props) => {
    const[productsList,setProductsList]=useState(PRODUCTS);
    const[testState,setTestState]=useState("Testes")
    const [cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem('storedList')) || getDefaultCart());

    useEffect(()=>{
      const storedList=localStorage.getItem('storedList')
      console.log("Main UE")
      if(storedList){
        setCartItems(JSON.parse(storedList))
      }else{
        setCartItems(getDefaultCart());
      }
    },[]);

    useEffect(()=>{
      console.log("Cart UE")
      localStorage.setItem('storedList', JSON.stringify(cartItems));
    },[cartItems]);


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

    //Things needed to be shared globally accross the App
    const contextValue={cartItems,addToCart,removeFromCart,updateCartItemCount,updateCartItemCount,getTotalCartAmount,testState,setTestState,productsList,setProductsList};

//passing global things...
// console.log(cartItems)    
  return <ShopContext.Provider value={contextValue} >
    {props.children}
  </ShopContext.Provider>
}

export default ShopContextProvider
