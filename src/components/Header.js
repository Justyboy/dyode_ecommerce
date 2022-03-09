
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import companyLogo from '../assets/logo.png';
 


function Header() {
  return (
      <div className='header'>
    <div className="header__left">
   <img src={companyLogo}
   alt="Company logo"
   width="100px"
   height="100px"
   /> 
   </div>
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
      <AccountBoxIcon />
      <ShoppingCartIcon />  


   </div>
   </div>
  )
}

export default Header