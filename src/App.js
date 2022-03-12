
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Heroslide from './components/Heroslide'; 
import Collection from './components/Collection';
import Womens from './womens.png';
import Mens from './mens.png';
import Accessories from './accessories.png';
import Productslide from './components/Productslide';
import Banner from './components/Banner';
import Newsletter from './components/Newsletter';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import './App.css'


function App() {

  return (
    <div className="App" id="outer-container">
      <div className="topbar">
      <Topbar message="FREE SHIPPING OVER ON ALL ORDERS OVER $75 " /> 
      </div>
    
      {/* Sidebar */}
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      
      {/* Header */}
      <Header />
    
      {/* Hero*/}
      <Heroslide />
    
    {/* Collections */}
    <div className="collection-wrapper">
    <Collection image={Womens} title="Women's"  />
    <Collection image={Mens} title="Men's"  />
    <Collection image={Accessories} title="Accessories"  />
    </div>

    {/* Product Slider */}
    <div className="product-header">New Arrivals</div>
    <Productslide />


    {/* Bottom Banner */}

    <Banner />


    {/* Newsletter */}

    <Newsletter />



    {/* Footer */}
   </div>


  );
}

export default App;
