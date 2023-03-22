import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from '../src/pages/About'
import Products from './pages/Products'
import Footer from './pages/Footer'
import Carrousel from './pages/Carrousel'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <About />
    <Products />
    <Footer />
    {/*<Carrousel />*/}
    
  </React.StrictMode>,
)
