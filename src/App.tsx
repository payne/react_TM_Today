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
      <Routes>
        <Route path="/assigned" element={<Assigned />} />
        <Route path="/unassigned" element={<Unassigned />} />
      </Routes>
      
      <ol>
        <li>
          <Link to="/assigned">Assigned</Link>
        </li>
        <li>
          <Link to="/unassigned">Unassigned</Link>
        </li>
      </ol>

      <Outlet />
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
        
        {count > 0 
          ? <p>
              <code>The count is now: {count}</code>
            </p>
          : null}
        
        <p>
          I will Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
