import { PawPrint } from 'lucide-react'
import React from 'react'

const Tag = () => {
  return (
    <div className='bg-[#F8D902] w-fit flex items-center gap-2 px-4 py-1 rounded-full'>
        <div className="paw text-[#432818]">
            <PawPrint size={16}/>
        </div>
        <p className='text-sm'>For Adult Dogs</p>
    </div>
  )
}

export default Tag