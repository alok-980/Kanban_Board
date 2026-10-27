import { DEFAULT_PRIORITY, DEFAULT_STATUS, STATUSES } from '../constants'

export const cleanTaskData = (data) => ({
    title: data.title.trim(),
    description: (data.description || '').trim(),
    priority: data.priority || DEFAULT_PRIORITY,
    status: data.status || DEFAULT_STATUS,
    dueDate: data.dueDate || '',
})

export const createTask = (data) => ({
    id: crypto.randomUUID(),
    ...cleanTaskData(data),
})

export const filterTasks = (tasks, { search, priority, status }) => {
    const query = search.trim().toLowerCase()

    return tasks.filter((task) => {
        const matchSearch = task.title.toLowerCase().includes(query)
        const matchPriority = priority === 'all' || task.priority === priority
        const matchStatus = status === 'all' || task.status === status
        return matchSearch && matchPriority && matchStatus
    })
}

export const groupByStatus = (tasks) => {
    const groups = {}
    STATUSES.forEach((status) => {
        groups[status.value] = tasks.filter((task) => task.status === status.value)
    })
    return groups
}

export const isOverdue = (task) => {
    const today = new Date().toLocaleDateString('en-CA')
    return Boolean(task.dueDate) && task.status !== 'completed' && task.dueDate < today
}

export const formatDate = (date) =>
    new Date(date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })