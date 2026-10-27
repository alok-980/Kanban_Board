import { useState, useEffect } from 'react'
import { loadTasks, saveTasks } from '../utils/storage'
import { createTask, cleanTaskData } from '../utils/taskHelpers'

const useTasks = () => {
    const [tasks, setTasks] = useState(loadTasks)

    // whenever task change save in localstorage
    useEffect(() => {
        saveTasks(tasks)
    }, [tasks])

    const addTask = (data) => {
        setTasks((prev) => [...prev, createTask(data)])
    }

    const updateTask = (id, data) => {
        setTasks((prev) =>
            prev.map((task) => (task.id === id ? { ...task, ...cleanTaskData(data) } : task))
        )
    }

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id))
    }

    const moveTask = (id, status) => {
        setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, status } : task)))
    }

    return { tasks, addTask, updateTask, deleteTask, moveTask }
}

export default useTasks