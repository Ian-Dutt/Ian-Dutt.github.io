import "./styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from "./pages/projects";
import Navbar from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about"
import Visualizer from "./pages/visualizer";

function App(props) {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />}/>
          <Route path='/search-visualizer' element={<Visualizer />}/>
        </Routes>
      </Router>
    </>
  );
}



export default App;
