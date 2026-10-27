import React, { forwardRef } from 'react'
import { controlClass, getBorderClass } from './controlStyles'

const Input = forwardRef(({ hasError = false, className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      aria-invalid={hasError}
      className={`${controlClass} ${getBorderClass(hasError)} min-h-11 ${className}`}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input