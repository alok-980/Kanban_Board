import React from 'react'

const FormField = ({ label, error, className = '', children }) => {
  return (
    <label className={`flex flex-col gap-1.5 text-sm font-semibold ${className}`}>
      {label}
      {children}
      {error && (
        <span role='alert' className='font-normal text-danger'>
          {error}
        </span>
      )}
    </label>
  )
}

export default FormField