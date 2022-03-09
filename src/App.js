
import Header from './components/Header';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import Annoucementbar from './components/Annoucementbar';


import './App.css'

function App() {
  return (
    <div className="App" id="outer-container">
      <Annoucementbar message="FREE SHIPPING OVER ON ALL ORDERS OVER $75 " /> 

      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      
        
      </div>
  <Header />

<Banner />
 
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
