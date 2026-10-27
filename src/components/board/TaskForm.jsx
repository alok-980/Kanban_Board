import React from 'react'
import { useForm } from 'react-hook-form'
import Modal from '../ui/Modal'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import Select from '../ui/Select'
import Button from '../ui/Button'
import FormField from '../ui/FormField'
import { PRIORITIES, STATUSES, DEFAULT_PRIORITY } from '../../constants'
import { titleRules } from '../../utils/validation'

// Priority buttons: Your color when selected
const selectedStyle = {
  low: 'peer-checked:border-green-700 peer-checked:bg-green-100 peer-checked:text-green-800',
  medium: 'peer-checked:border-amber-700 peer-checked:bg-amber-100 peer-checked:text-amber-800',
  high: 'peer-checked:border-danger peer-checked:bg-red-100 peer-checked:text-danger',
}

// task = null  -> Add mode
// task = {...} -> Edit mode
const TaskForm = ({ task, defaultStatus, onSave, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: task?.title ?? '',
      description: task?.description ?? '',
      priority: task?.priority ?? DEFAULT_PRIORITY,
      status: task?.status ?? defaultStatus,
      dueDate: task?.dueDate ?? '',
    },
  })

  return (
    <Modal title={task ? 'Edit task' : 'Add task'} onClose={onClose}>
      {/* handleSubmit pehle validation chalata hai, sahi hone par hi onSave call hota hai */}
      <form onSubmit={handleSubmit(onSave)} noValidate className='flex flex-col gap-4'>
        <FormField label='Title' error={errors.title?.message}>
          <Input hasError={Boolean(errors.title)} autoFocus {...register('title', titleRules)} />
        </FormField>

        <FormField label='Description'>
          <Textarea placeholder='Add a short description' {...register('description')} />
        </FormField>

        <fieldset className='flex flex-col'>
          <legend className='mb-1.5 text-sm font-semibold'>Priority</legend>
          <div className='flex gap-2'>
            {PRIORITIES.map((priority) => (
              <label key={priority.value} className='flex-1'>
                <input
                  type='radio'
                  value={priority.value}
                  className='peer sr-only'
                  {...register('priority')}
                />
                <span
                  className={`flex min-h-11 cursor-pointer items-center justify-center rounded-lg border border-line-strong bg-white text-sm peer-checked:font-semibold peer-focus-visible:ring-2 peer-focus-visible:ring-brand ${selectedStyle[priority.value]}`}
                >
                  {priority.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className='grid gap-3 sm:grid-cols-2'>
          <FormField label='Due date'>
            <Input type='date' {...register('dueDate')} />
          </FormField>
          <FormField label='Status'>
            <Select options={STATUSES} {...register('status')} />
          </FormField>
        </div>

        <div className='mt-2 flex justify-end gap-2'>
          <Button variant='secondary' onClick={onClose}>
            Cancel
          </Button>
          <Button type='submit'>{task ? 'Save changes' : 'Save task'}</Button>
        </div>
      </form>
    </Modal>
  )
}

export default TaskForm