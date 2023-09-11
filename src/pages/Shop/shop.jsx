import React,{useContext} from 'react'
import { PRODUCTS } from '../../products'
import Product from './product'
import Dropdown from './Dropdown'
import "./shop.css" 
import { ShopContext } from '../../context/shop-context'
const shop = () => {
  const{testState,productsList}=useContext(ShopContext);
  return (<>
    <div className='shop'>
      <div className='headers'>
        <div> <h1>Pranay's Shop {testState}</h1></div>
         <Dropdown/>
      </div>
        <div className="products">
        {productsList.map((product) =>{
            return <Product data={product} key={product.id} />
        })}
      </div>

    </div>
    </>
  )
}

export default shop
