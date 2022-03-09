
import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Annoucementbar from './components/Annoucementbar';


import './App.css'

function App() {
  return (
    <div className="App" id="outer-container">
      <Annoucementbar message="FREE SHIPPING OVER ON ALL ORDERS OVER $75 " /> 
      {/* Sidebar */}
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      {/* Header */}
        <Header />

      {/* Hero*/}
      <Hero />
      
    
    {/* Collections */}
    {/* Product Slider */}
    {/* Bottom Banner */}
    {/* Newsletter */}
    {/* Footer */}
   </div>


  );
}

export default App;
