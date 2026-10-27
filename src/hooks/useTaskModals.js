import { useState } from 'react'
import { DEFAULT_STATUS } from '../constants'

const useTaskModals = () => {
    const [form, setForm] = useState(null)
    const [taskToDelete, setTaskToDelete] = useState(null)

    const openAddForm = (status = DEFAULT_STATUS) => setForm({ task: null, status })
    const openEditForm = (task) => setForm({ task, status: task.status })
    const closeForm = () => setForm(null)

    const askDelete = (task) => setTaskToDelete(task)
    const closeDelete = () => setTaskToDelete(null)

    return { form, openAddForm, openEditForm, closeForm, taskToDelete, askDelete, closeDelete }
}

export default useTaskModals