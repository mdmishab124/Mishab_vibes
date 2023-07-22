import './App.css';
import Hero from './pages/Hero'
import About from './pages/About'
import NavBar from './components/NavBar';
import Contact from './pages/Contact'
import Project from './pages/Projects'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
