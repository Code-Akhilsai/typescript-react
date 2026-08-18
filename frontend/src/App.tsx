
import './App.css'
import Dashboard from './Dashboard.tsx'
import Home from "./Home.tsx"
import Profile from './Profile.tsx'
import { Routes,Route } from 'react-router-dom'

function App() {


  return (
    <Routes>
  <Route path={"/"}  element={<Home/>}/>
  <Route path={"/profile"} element={<Profile/>}/>
    <Route path={"/dashboard"} element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
