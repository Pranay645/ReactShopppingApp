import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './product'
import "./shop.css" 
const shop = () => {
  return (
    <div className='shop'>
        <div> <h1>Pranay's Shop </h1></div>
        <div className="products">


        {PRODUCTS.map((product) =>{
            return <Product data={product} key={product.id} />
        })}
        </div>
    </div>
  )
}

export default shop
