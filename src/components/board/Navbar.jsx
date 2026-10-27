import React from 'react'
import Button from '../ui/Button'

const Navbar = () => {
  return (
    <div className='w-full bg-amber-50 flex justify-between items-center px-6 py-4 border-b'>
      <div className='text-xl font-semibold'>
        TaskFlow
      </div>
      <Button />
    </div>
  )
}

export default Navbar