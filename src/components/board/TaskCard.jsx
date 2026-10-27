import React from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Select from '../ui/Select'
import { PRIORITIES, STATUSES } from '../../constants'
import { isOverdue, formatDate } from '../../utils/taskHelpers'

const touchClass = 'max-sm:min-h-11' // 44px touch target on mobile

const TaskCard = ({ task, onEdit, onDelete, onMove }) => {
  const priorityLabel = PRIORITIES.find((p) => p.value === task.priority)?.label
  const moveOptions = STATUSES.filter((s) => s.value !== task.status)
  const overdue = isOverdue(task)

  return (
    <article className='flex flex-col gap-2 rounded-xl border border-line bg-white p-4'>
      <div className='flex items-center justify-between gap-2'>
        <Badge priority={task.priority}>{priorityLabel}</Badge>
        {task.dueDate && (
          <span className={`text-sm ${overdue ? 'font-semibold text-danger' : 'text-muted'}`}>
            {overdue ? 'Overdue' : 'Due'} {formatDate(task.dueDate)}
          </span>
        )}
      </div>

      <h3 className='break-words font-semibold'>{task.title}</h3>

      {task.description && <p className='break-words text-sm leading-relaxed text-muted'>{task.description}</p>}

      <div className='mt-1 flex flex-wrap items-center gap-2'>
        <Button small variant='secondary' className={touchClass} onClick={() => onEdit(task)}>
          Edit
        </Button>
        <Button small variant='secondary' className={touchClass} onClick={() => onDelete(task)}>
          Delete
        </Button>
        <Select
          small
          className={`min-w-32 flex-1 ${touchClass}`}
          aria-label={`Move ${task.title} to another column`}
          placeholder='Move to…'
          options={moveOptions}
          value=''
          onChange={(e) => onMove(task.id, e.target.value)}
        />
      </div>
    </article>
  )
}

export default TaskCard