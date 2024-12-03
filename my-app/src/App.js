import logo from './logo.svg';
import './App.css';
//import Welcome from './components/Welcome';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p className="App-text"> 
          My First App <code>src/App.js</code> With React
        </p>
        <Welcome message="Hola Welcome Props Antonio" name="Antonio Cortes"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Router>
            <ul className='App-menu'>
              <li className='App-menu-item'> 
                <Link to="/home">Inicio</Link>
              </li>
              <li className='App-menu-item'>
                <Link to="/contact">Contacto</Link>
              </li>
              <li className='App-menu-item'> 
                <Link to="/about-me">Sobre Nosotros</Link>
              </li>
              <li className='App-menu-item'> 
                <Link to="/profile">Perfil</Link>
              </li>
            </ul>
          <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/about-me' element={<AboutMe/>}/>
              <Route path='/profile/:name' element={<Profile/>}/>
          </Routes>
        </Router>
        
      </header>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Mi Aplicación React </p>
        <p>Desarrollado por Antonio Cortés</p>
      </footer>

       {/* Footer */}
      
    </div>
  );
}

export default App;
