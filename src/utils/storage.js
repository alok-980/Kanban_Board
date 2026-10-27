import { STORAGE_KEY } from '../constants'

export const loadTasks = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        const data = saved ? JSON.parse(saved) : []
        return Array.isArray(data) ? data : []
    } catch {
        return []
    }
}

export const saveTasks = (tasks) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch {
        // storage full ya blocked: app still run
    }
}