import React from 'react'
import Search from '../ui/Search'
import Select from '../ui/Select'
import Button from '../ui/Button'
import FormField from '../ui/FormField'
import { PRIORITIES, STATUSES } from '../../constants'

const priorityOptions = [{ value: 'all', label: 'All priorities' }, ...PRIORITIES]
const statusOptions = [{ value: 'all', label: 'All statuses' }, ...STATUSES]

const FilterBar = ({ filters, onFilterChange, onClear, isFiltering, resultCount }) => {
  return (
    <div className='flex flex-wrap items-end gap-3 py-5'>
      <Search
        className='w-full sm:min-w-56 sm:max-w-xl sm:flex-1'
        value={filters.search}
        onChange={(e) => onFilterChange('search', e.target.value)}
      />

      <FormField label='Priority' className='w-[calc(50%-6px)] sm:w-40'>
        <Select
          options={priorityOptions}
          value={filters.priority}
          onChange={(e) => onFilterChange('priority', e.target.value)}
        />
      </FormField>

      <FormField label='Status' className='w-[calc(50%-6px)] sm:w-40'>
        <Select
          options={statusOptions}
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value)}
        />
      </FormField>

      <span className='pb-3 text-sm text-muted'>
        {resultCount} {resultCount === 1 ? 'task' : 'tasks'}
      </span>

      {isFiltering && (
        <Button variant='ghost' onClick={onClear}>
          Clear
        </Button>
      )}
    </div>
  )
}

export default FilterBar