import { Routes, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import './App.css'
import { Assigned } from './components/Assigned';
import { Unassigned } from './components/Unassigned';
import { Home } from "./components/Home";

function App() {

  return (
    <>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/assigned">Assigned</Link>
        <Link to="/unassigned">Unassigned</Link>
      </Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assigned" element={<Assigned />} />
        <Route path="/unassigned" element={<Unassigned />} />
      </Routes>
    </>
  )
}

export default App;

