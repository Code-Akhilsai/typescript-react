
import './App.css'
import Home from "./Home.tsx"
import Profile from './Profile.tsx'
import { Routes,Route } from 'react-router-dom'

function App() {


  return (
    <Routes>
  <Route path={"/"}  element={<Home/>}/>
  <Route path={"/profile"} element={<Profile/>}/>
    </Routes>
  )
}

export default App
