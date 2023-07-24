import './App.css';
import Hero from './pages/Hero'
import About from './pages/About'
import NavBar from './components/NavBar';
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
