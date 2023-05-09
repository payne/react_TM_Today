import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Assigned } from './components/Assigned';
import { Unassigned } from './components/Unassigned';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ol>
        <li>
          <Link to="/assigned">Assigned</Link>
        </li>
        <li>
          <Link to="/unassigned">Unassigned</Link>
        </li>
      </ol>

      <Outlet />

      <Routes>
        <Route path="/assigned" element={<Assigned />} />
        <Route path="/unassigned" element={<Unassigned />} />
      </Routes>
      
    </>
  )
}

export default App
