import React, { useState } from 'react'
import Column from './Column'
import EmptyState from '../ui/EmptyState'
import { STATUSES } from '../../constants'
import { groupByStatus } from '../../utils/taskHelpers'

const MainBoard = ({ tasks, totalCount, onAdd, onEdit, onDelete, onMove, onClear }) => {
  // Which columns to display on mobile (tabs)
  const [activeStatus, setActiveStatus] = useState(STATUSES[0].value)

  // State 1: No task at all
  if (totalCount === 0) {
    return (
      <EmptyState
        title='No tasks yet'
        message='Your board is empty. Create your first task to get started.'
        actionLabel='Add your first task'
        onAction={() => onAdd()}
      />
    )
  }

  // State 2: There are tasks, but nothing matched the search/filter.
  if (tasks.length === 0) {
    return (
      <EmptyState
        title='No results found'
        message='No tasks match your search or filters. Try something different.'
        actionLabel='Clear search and filters'
        onAction={onClear}
      />
    )
  }

  // State 3: normal board
  const columns = groupByStatus(tasks)

  return (
    <>
      {/* Mobile tabs */}
      <div role='tablist' className='-mx-4 mb-4 flex border-b border-line bg-white sm:hidden'>
        {STATUSES.map((status) => {
          const isActive = activeStatus === status.value
          return (
            <button
              key={status.value}
              type='button'
              role='tab'
              aria-selected={isActive}
              onClick={() => setActiveStatus(status.value)}
              className={`min-h-11 flex-1 cursor-pointer border-b-[3px] text-sm ${
                isActive ? 'border-brand font-semibold' : 'border-transparent'
              }`}
            >
              {status.label} {columns[status.value].length}
            </button>
          )
        })}
      </div>

      {/* Mobile: 1 column, tablet: 2, desktop: 3 */}
      <div className='grid gap-5 sm:grid-cols-2 sm:items-start lg:grid-cols-3'>
        {STATUSES.map((status) => (
          <Column
            key={status.value}
            status={status}
            tasks={columns[status.value]}
            isActive={activeStatus === status.value}
            onAdd={onAdd}
            onEdit={onEdit}
            onDelete={onDelete}
            onMove={onMove}
          />
        ))}
      </div>
    </>
  )
}

export default MainBoard