import { useState } from 'react'
import './App.css'
import ProductList from './features/products/ProductList'
import {Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

import CartPage from './pages/CartPage';
import Layout from './components/Layout';

function App() {

  return (
    <Layout>
      <Routes>
        <Route
         path="/" 
         element={<HomePage />} />
        <Route
         path="/product/:id" 
        element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Layout>
  )
}

export default App
