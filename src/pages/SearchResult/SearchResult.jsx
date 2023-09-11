import React from 'react'
import Product from '../Shop/product'
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
    const location=useLocation();
    const filteredResult=location.state;

    //  const {filteredResult}=props.location.state;
    // console.log(filteredResult);
     const result=filteredResult || []
     
  return (
    <div className='shop'>
        <div> <h1>Results </h1></div>
        <div className="products">


        {result.map((product) =>{
            return <Product data={product} key={product.id} />
        })}
        </div>
    </div>
  )
}

export default SearchResult
