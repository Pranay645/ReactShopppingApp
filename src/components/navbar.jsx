import React from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'
import SearchInput from './SearchInput'

const navbar = () => {
  // const handleSearch=(searchTerm)=>{
  //   console.log("Searching ...."+searchTerm);
  // }


  return (
    <div className='navbar'> 
        <SearchInput/>
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
  )
}

export default navbar
