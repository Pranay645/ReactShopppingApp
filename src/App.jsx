import { useState } from 'react'

// import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Shop from './pages/Shop/shop'
import Cart from './pages/Cart/cart'
import ShopContextProvider from './context/shop-context'
import SearchResult from './pages/SearchResult/SearchResult'
function App() {

  return (
    <>
    <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}  />
            <Route path="/search-result" element={<SearchResult/>} />
        </Routes>
      </Router>
    </ShopContextProvider>
    </>
  )
}

export default App
