import React from 'react'
import Input from './Input'
import { SearchIcon } from './Icons'

const Search = ({ value, onChange, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <span className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted'>
        <SearchIcon />
      </span>
      <Input
        type='search'
        aria-label='Search tasks by title'
        placeholder='Search tasks by title'
        value={value}
        onChange={onChange}
        className='pl-10'
      />
    </div>
  )
}

export default Search