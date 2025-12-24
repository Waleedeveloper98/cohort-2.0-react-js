import React from 'react'
import ProductMainImage from './ProductMainImage'
import MiniProductImage from './MiniProductImage'

const ProductImagesSection = () => {
  return (
    <div className='h-screen min-h-screen flex flex-col gap-4 md:flex-row-reverse lg:w-1/2'>
        <ProductMainImage />
        <div className="mini-product-images flex justify-between flex-wrap gap-2 md:flex-col md:w-[30%]  md:h-3/5 lg:h-4/5">
            <MiniProductImage />
            <MiniProductImage />
            <MiniProductImage />
            <MiniProductImage />
        </div>
    </div>
  )
}

export default ProductImagesSection