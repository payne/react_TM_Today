import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css'
import { Assigned } from './components/Assigned';
import { Unassigned } from './components/Unassigned';
import { Home } from "./components/Home";

function App() {

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
        <Route path="/" element={<Home />} />
      </Routes>
      
    </>
  )
}

export default App
