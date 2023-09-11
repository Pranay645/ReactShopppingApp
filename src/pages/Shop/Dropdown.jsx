import React,{useContext} from 'react'
import { useState } from 'react'
import { ShopContext } from '../../context/shop-context'
import { ArrowFatDown } from 'phosphor-react'

const Dropdown = () => {
   
    const [sort,setSort]=useState(<ArrowFatDown size={20}/>)
    const{setTestState,productsList,setProductsList}=useContext(ShopContext)
    const sortItem=(e,sortType)=>{
        setSort(e.target.textContent)
        // console.log(sortType)
        setTestState(sortType)
        let sortedProducts = productsList;
        if(sortType=='alp'){
            sortedProducts=[...productsList].sort((a,b)=>{return a.productName.localeCompare(b.productName)});
        }
       else if(sortType=='asc'){
        sortedProducts=[...productsList].sort((a,b)=>{return a.price-b.price});
       }else if(sortType=='des'){
        sortedProducts=[...productsList].sort((a,b)=>{return b.price-a.price});
       }
        // console.log(sortedProducts)
        setProductsList(sortedProducts)
    }
  return (
    <div className="dropdown">
            <button className="dropdown-button">Sort:{sort} </button>
                <div className="dropdown-content">
                    <button className="dropdown-item"  onClick={(e)=>{sortItem(e,"des")}} >By Price(High to Low)</button>
                    <button className="dropdown-item" onClick={(e)=>{sortItem(e,"asc")}}>By Price(Low to High)</button>
                    <button className="dropdown-item"  onClick={(e)=>{sortItem(e,"alp")}} >Alphabetically</button>
                </div>
    </div>
  )
}

export default Dropdown
