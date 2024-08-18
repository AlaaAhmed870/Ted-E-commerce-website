// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import { CartProvider } from './Context/CartContext';
import { WishlistProvider } from './Context/WishlistContext';
import Products from './Components/Pages/Products';
import ProductDetail from './Components/Pages/ProductDetail'; // New product detail page
import Cart from './Components/Pages/Cart';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import SignOut from './Components/Pages/SignOut';
import ForgetPass from './Components/Pages/ForgetPass';
import Wishlist from './Components/Pages/Wishlist';
import PageNotFound from './Components/pageNotFound/PageNotFound';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;