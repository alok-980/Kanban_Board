import React from 'react'
import Button from '../ui/Button'
import { PlusIcon } from '../ui/Icons'

const Navbar = ({ onAdd }) => {
  return (
    <header className='sticky top-0 z-10 flex items-center justify-between border-b border-line bg-white px-4 py-3.5 sm:px-8'>
      <h1 className='text-xl font-bold text-brand'>TaskFlow</h1>

      {/* Desktop: normal button */}
      <Button className='hidden sm:inline-flex' onClick={onAdd}>
        <PlusIcon /> Add task
      </Button>

      {/* Mobile: floating button */}
      <Button
        aria-label='Add task'
        className='fixed bottom-6 right-4 z-10 h-14 w-14 rounded-full p-0 shadow-lg sm:hidden'
        onClick={onAdd}
      >
        <PlusIcon size={24} />
      </Button>
    </header>
  )
}

export default Navbar