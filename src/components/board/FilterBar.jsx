import React from 'react'
import Search from '../ui/Search'
import Select from '../ui/Select'

export const PRIORITIES = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

export const STATUSES = [
  { value: "todo", label: "Todo" },
  { value: "in-progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
];

const FilterBar = () => {
  return (
    <div className='w-full flex px-6 py-3'>
      <Search />

      <div className='flex'>
        <Select option={PRIORITIES} />
        <Select option={STATUSES} />
      </div>
    </div>
  )
}

export default FilterBar