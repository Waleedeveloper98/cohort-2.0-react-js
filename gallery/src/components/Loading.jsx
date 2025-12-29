import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-screen flex items-center flex-col gap-4 justify-center text-center'>
        <div className="loader size-18 border-dashed border-yellow-500 border-4 rounded-full animate-spin "></div>
        <h2 className='font-semibold text-lg'>Loading...</h2>
    </div>
  )
}

export default Loading