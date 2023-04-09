import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import JobDreams from './Header/JobDreams/JobDreams'
import JobCategory from './JobCategory/JobCategory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <JobDreams></JobDreams>
      <JobCategory></JobCategory>
      <Outlet></Outlet>
    </div>

  )
}

export default App
