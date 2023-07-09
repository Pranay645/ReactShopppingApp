import React,{ useContext } from 'react'
// import React from 'react'
import {ShopContext } from '../../context/shop-context'
const product = (props) => {
  
  const {addToCart,cartItems}=useContext(ShopContext)

  const{id,productName,price,productImage}=props.data;

   const cartItemAmount=cartItems[id];

  return (
    <div className='product'>
    <img src={productImage} alt="Product Image" />
    <div className="description">
      <p><b>{productName}</b></p>
      <p>Price: ${price}</p>
      <button className='addToCartBttn'onClick={()=>addToCart(id)} >
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>

    </div>
    </div>
  )
}

export default product
