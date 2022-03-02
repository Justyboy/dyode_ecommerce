 import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '../assets/App.css';

function App() {
  return (
    <div className="App">
     
     {/* Header */}
<h1>Header</h1>
 <div className="header__left">
   {/* <img src='#' alt=""/> */}
   <div className='header__center'>
     <ul>
       <li>HOME</li>
       <li>WOMEN'S</li>
       <li>ACCESSORIES</li>
       <li>SALE</li>

     </ul>
     </div>
   <div className='header__right'>

   <SearchIcon />
  <AccountBoxIcon/>
  <ShoppingCartIcon />  

   </div>
 </div>





     {/* Banner */}
    {/* Collections */}
    {/* Product Slider */}
    {/* Bottom Banner */}
    {/* Newsletter */}
    {/* Footer */}

    </div>
  );
}

export default App;
