import './App.css';

// React router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/projects/Project';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/projects' element={<Project/>} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
