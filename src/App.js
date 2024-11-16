import './App.css';
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Product from "./components/product.jsx";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <h1 className='content'>Hello World React </h1>
      <Product></Product>
      <Footer></Footer>
    </div>

  );
}

export default App;