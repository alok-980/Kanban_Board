import { useState } from 'react'
import { INITIAL_FILTERS } from '../constants'

const useFilters = () => {
    const [filters, setFilters] = useState(INITIAL_FILTERS)

    const setFilter = (name, value) => {
        setFilters((prev) => ({ ...prev, [name]: value }))
    }

    const clearFilters = () => setFilters(INITIAL_FILTERS)

    const isFiltering =
        filters.search.trim() !== '' || filters.priority !== 'all' || filters.status !== 'all'

    return { filters, setFilter, clearFilters, isFiltering }
}

export default useFilters