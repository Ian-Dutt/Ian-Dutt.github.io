import "./styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from "./components/pages/projects";
import Navbar from "./components/nav";
import Home from "./components/pages/home";
import About from "./components/pages/about"

function App(props) {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
    </>
  );
}



export default App;
