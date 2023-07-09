// Todo Solve the issue where on erasing input of cart item it is not removed
import React,{useContext} from 'react'
import './cart.css'
import { ShopContext } from '../../context/shop-context';
const CartItem = (props) => {
    const{id,productName,productImage,price}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount} =useContext(ShopContext)
    const handleCount=(value,id)=>{
      if(value===''){
        updateCartItemCount(1,id);
      }else{
        updateCartItemCount(Number(value),id);
      }
    }
  return (
    <div className='cartItem'>
      
       <img src={productImage} alt="ProductImage" />
       <div className="description">
      <p><b>{productName}</b></p>
      <p>Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          {/* <input type="text" value={cartItems[id]} onChange={(e)=>{updateCartItemCount(Number(e.target.value),id)}} /> */}
          
          <input type="text" value={cartItems[id]} onChange={(e)=>{handleCount(e.target.value,id)}} />
          <button onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
