import React, { forwardRef } from 'react'
import { controlClass, getBorderClass } from './controlStyles'

const Textarea = forwardRef(({ hasError = false, className = '', ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      rows={3}
      className={`${controlClass} ${getBorderClass(hasError)} resize-y py-2.5 ${className}`}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export default Textarea