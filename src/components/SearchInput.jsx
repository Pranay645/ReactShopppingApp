import React, { useState} from 'react';
import { MagnifyingGlass } from 'phosphor-react'; // Import the search icon
import { PRODUCTS } from '../products';
import { useNavigate } from 'react-router-dom';
function SearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult,setSearchResult]=useState([]);
  const navigate=useNavigate()
  // const history=useHistory()
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSearchClick = () => {

   const filteredProducts=PRODUCTS.filter((product)=>product.productName.toLowerCase().includes(searchTerm.toLowerCase()));
  
    setSearchResult(filteredProducts)
    // history.push({
    //   pathname:'search-result',
    //   state:{filteredProducts}
    // })
    navigate("/search-result", { state:filteredProducts });
    setSearchTerm("")
    // console.log(filteredProducts)
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>
       <MagnifyingGlass size={32}/>
      </button>
    </div>
  );
}

export default SearchInput;
