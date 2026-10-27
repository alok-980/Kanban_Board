import React from 'react'
import Button from './Button'

const EmptyState = ({ title, message, actionLabel, onAction }) => {
  return (
    <div className='mx-auto my-10 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-dashed border-line-strong bg-white px-6 py-8 text-center'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='text-sm text-muted'>{message}</p>
      <Button onClick={onAction}>{actionLabel}</Button>
    </div>
  )
}

export default EmptyState