import React from 'react'
import TaskCard from './TaskCard'
import Button from '../ui/Button'

const dotColor = {
  todo: 'bg-muted',
  'in-progress': 'bg-amber-700',
  completed: 'bg-green-700',
}

const Column = ({ status, tasks, isActive, onAdd, onEdit, onDelete, onMove }) => {
  return (
    <section
      aria-label={status.label}
      className={`${isActive ? 'flex' : 'hidden sm:flex'} min-w-0 flex-col gap-3`}
    >
      {/* Column heading: tabs on mobile that's why there is hide */}
      <div className='hidden items-center gap-2 px-1 sm:flex'>
        <span className={`h-2.5 w-2.5 rounded-full ${dotColor[status.value]}`} />
        <h2 className='font-bold'>{status.label}</h2>
        <span className='ml-auto text-sm text-muted'>{tasks.length}</span>
      </div>

      {tasks.length === 0 && (
        <p className='rounded-xl border border-dashed border-line-strong p-3 text-center text-sm text-muted'>
          No tasks here
        </p>
      )}

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onMove={onMove} />
      ))}

      <Button
        variant='secondary'
        className='w-full border-dashed text-muted'
        onClick={() => onAdd(status.value)}
      >
        + Add task
      </Button>
    </section>
  )
}

export default Column