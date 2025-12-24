import React from 'react'

const ProductMainImage = () => {
  return (
    <div className='w-full h-[clamp(250px,72vh,450px)] md:w-full rounded-xl bg-amber-900 overflow-hidden'>
        <img className='size-full object-cover' src="https://m.media-amazon.com/images/I/71j2AV1WYUL._AC_SX679_.jpg" alt="" />
    </div>
  )
}

export default ProductMainImage