import React from 'react'
import Navbar from './components/board/Navbar'
import FilterBar from './components/board/FilterBar'
import MainBoard from './components/board/MainBoard'
import TaskForm from './components/board/TaskForm'
import DeleteModal from './components/board/DeleteModal'
import useTasks from './hooks/useTasks'
import useFilters from './hooks/useFilters'
import useTaskModals from './hooks/useTaskModals'
import { filterTasks } from './utils/taskHelpers'

const App = () => {
  // 1) Data + actions
  const { tasks, addTask, updateTask, deleteTask, moveTask } = useTasks()
  const { filters, setFilter, clearFilters, isFiltering } = useFilters()
  const { form, openAddForm, openEditForm, closeForm, taskToDelete, askDelete, closeDelete } =
    useTaskModals()

  // 2) Derived data: Filtered lists are not stored; they are generated on every render.
  const filteredTasks = filterTasks(tasks, filters)

  // 3) Form save: If it’s a form task, then edit; otherwise, add.
  const handleSave = (data) => {
    if (form.task) {
      updateTask(form.task.id, data)
    } else {
      addTask(data)
    }
    closeForm()
  }

  const handleConfirmDelete = () => {
    deleteTask(taskToDelete.id)
    closeDelete()
  }

  // 4) UI
  return (
    <div className='min-h-screen bg-page font-sans text-ink'>
      <Navbar onAdd={() => openAddForm()} />

      <main className='mx-auto max-w-[1440px] px-4 pb-24 sm:px-8 sm:pb-10'>
        {tasks.length > 0 && (
          <FilterBar
            filters={filters}
            onFilterChange={setFilter}
            onClear={clearFilters}
            isFiltering={isFiltering}
            resultCount={filteredTasks.length}
          />
        )}

        <MainBoard
          tasks={filteredTasks}
          totalCount={tasks.length}
          onAdd={openAddForm}
          onEdit={openEditForm}
          onDelete={askDelete}
          onMove={moveTask}
          onClear={clearFilters}
        />
      </main>

      {form && (
        <TaskForm task={form.task} defaultStatus={form.status} onSave={handleSave} onClose={closeForm} />
      )}
      {taskToDelete && (
        <DeleteModal task={taskToDelete} onConfirm={handleConfirmDelete} onCancel={closeDelete} />
      )}
    </div>
  )
}

export default App