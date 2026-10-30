import React from 'react'
import Button from '../ui/Button'

const DeleteModel = ({ task, onConfirm, onCancel }) => {
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-10'>
      <div className='bg-white rounded-2xl p-6 w-full max-w-sm flex flex-col gap-4'>
        <h2 className='text-xl font-semibold'>Delete task?</h2>
        <p className='text-gray-600 break-words'>
          "{task.title}" will be removed permanently.
        </p>
        <div className='flex justify-end gap-2'>
          <Button variant='secondary' onClick={onCancel}>Cancel</Button>
          <Button variant='danger' onClick={onConfirm}>Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModel