import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';


function App() {
  return (
    <div  className='max-w-7xl	mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
