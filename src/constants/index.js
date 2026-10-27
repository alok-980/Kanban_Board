export const STORAGE_KEY = 'kanban.tasks.v1'
export const TITLE_MAX_LENGTH = 80

export const PRIORITIES = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
]

export const STATUSES = [
    { value: 'todo', label: 'Todo' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
]

export const DEFAULT_PRIORITY = 'medium'
export const DEFAULT_STATUS = 'todo'

export const INITIAL_FILTERS = { search: '', priority: 'all', status: 'all' }