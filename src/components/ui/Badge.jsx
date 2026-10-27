import React from 'react'

const styles = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-amber-100 text-amber-800',
  high: 'bg-red-100 text-red-700',
}

const Badge = ({ priority, children }) => {
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[priority]}`}>
      {children}
    </span>
  )
}

export default Badge