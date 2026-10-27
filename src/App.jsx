import React from 'react'
import Navbar from './components/board/Navbar'
import FilterBar from './components/board/FilterBar'
import MainBoard from './components/board/MainBoard'

const App = () => {
  return (
    <div>
      <Navbar />
      <FilterBar />
      <MainBoard />
    </div>
  )
}

export default App