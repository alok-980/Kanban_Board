import React from 'react'

const Select = ({ option }) => {
  return (
    <div className='border w-[100%]'>
        <select name="" id="">
            <option value="all">All</option>
            {
                option.map((opt) => (
                    <option value={opt.value}>{opt.label}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Select