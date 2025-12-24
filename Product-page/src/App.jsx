import React from 'react'
import Navbar from './components/Navbar'
import ProductImagesSection from './components/productImagesSection/ProductImagesSection'

const App = () => {
  return (
    <div className='max-w-7xl m-auto'>
      <Navbar />
      <div className='px-4 py-3'>
        <ProductImagesSection />
      </div>
    </div>
  )
}

export default App