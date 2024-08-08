// APP

import Products from "./Components/Pages/Products"
import PageNotFound from "../src/Components/pageNotFound/PageNotFound"
import { Routes , Route } from 'react-router-dom';
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Components/Pages/Cart"




function App() {
  

  return (
    <CartProvider>
      
      < Navbar />
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      < Footer />
    </CartProvider>
  
  )
}

export default App
