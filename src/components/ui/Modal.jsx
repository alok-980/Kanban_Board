import React, { useEffect } from 'react'

const Modal = ({ title, onClose, children }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className='fixed inset-0 z-20 flex items-center justify-center bg-ink/50 p-4'
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role='dialog'
        aria-modal='true'
        aria-label={title}
        className='max-h-[92vh] w-full max-w-[560px] overflow-auto rounded-2xl bg-white p-6'
      >
        <h2 className='mb-4 text-[22px] font-bold'>{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal