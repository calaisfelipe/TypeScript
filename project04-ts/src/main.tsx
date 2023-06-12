import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ProductsProvider } from './context/ProductsProvider.tsx'
import { Navbar } from './components/Navbar.tsx'
import './index.css'
import { Footer } from './components/Footer.tsx'
import { CartContextProvider } from './context/CartProvider.tsx'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { MyCart } from './pages/MyCart.tsx'
import { CompletedOrder } from './pages/CompletedOrder.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
    <CartContextProvider>
    
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cart' element={<MyCart />} />
        <Route path='/neworder' element={<CompletedOrder />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer/>
    </Router>
    
    </CartContextProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
