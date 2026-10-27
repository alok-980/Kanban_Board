import React from 'react'

export const SearchIcon = () => {
  return (
    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'>
      <circle cx='11' cy='11' r='7' />
      <path d='M20 20l-4-4' />
    </svg>
  )
}

export const PlusIcon = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' aria-hidden='true'>
      <path d='M12 5v14M5 12h14' />
    </svg>
  )
}