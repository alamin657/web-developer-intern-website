import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import JobDreams from './Blog/JobDreams/JobDreams'
import JobCategory from './JobCategory/JobCategory'
import FeatureJobs from './Blog/FeatureJobs/FeatureJobs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <JobDreams></JobDreams>
      <JobCategory></JobCategory>
      <FeatureJobs></FeatureJobs>
      <Outlet></Outlet>
    </div>

  )
}

export default App
