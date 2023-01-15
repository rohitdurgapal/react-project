import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductListing from './components/home-page/ProductListing';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <ProductListing />
      </div>
      <Footer />

    </div>
  );
}

export default App;
