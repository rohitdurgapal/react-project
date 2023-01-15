import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductListing from './components/home-page/ProductListing';
function App() {
  return (
    <div className="App">
      
      <div className='container'>
        <Navbar />
        <ProductListing />
      </div>
      
    </div>
  );
}

export default App;
