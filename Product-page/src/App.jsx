import React from 'react'
import Navbar from './components/Navbar'
import ProductImagesSection from './components/productImagesSection/ProductImagesSection'
import ProductDetails from './components/productDetailsSection/ProductDetails'

const App = () => {
  return (
    <div className='max-w-7xl m-auto'>
      <Navbar />
      <div className='px-0 py-3'>
        <ProductImagesSection />
        <ProductDetails />
      </div>
    </div>
  )
}

export default App

// #89A590