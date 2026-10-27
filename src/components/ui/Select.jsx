import React, { forwardRef } from 'react'
import { controlClass } from './controlStyles'

// options: [{ value, label }]   placeholder: first option (value '')
const Select = forwardRef(({ options, placeholder, small = false, className = '', ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={`${controlClass} border-line-strong ${small ? 'min-h-9 text-sm' : 'min-h-11'} ${className}`}
      {...props}
    >
      {placeholder && <option value=''>{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
})

Select.displayName = 'Select'

export default Select