
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Header() {
  return (
      <div className='header'>
    <div className="header__left">
   <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-logo-or-icon-design-template-d6cdd0b35fc4b69ddc3288a7abd52ff3_screen.jpg?ts=1578260767' 
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
      <AccountBoxIcon/
      <ShoppingCartIcon />  


   </div>
   </div>
  )
}

export default Header