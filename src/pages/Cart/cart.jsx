import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'
import CartItem from './cart-item'
import { useNavigate } from 'react-router-dom'
const cart = () => {

  const { cartItems,getTotalCartAmount}=useContext(ShopContext);

  const totalAmount=getTotalCartAmount();

  const navigate=useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Item</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id] !==0){
            return <CartItem data={product} key={product.id}/>
          }
        })}
      </div>
      {totalAmount >0 ? (
      <div className="checkout">
        <p>SubTotal: ${totalAmount} </p>
        <button onClick={()=>navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>

        ) :(
          <h1>Your Cart is Empty</h1>
        )
      }
         
    </div>
  )
}

export default cart
