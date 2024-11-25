import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Games from './components/Games';
import Game from './components/Game';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameId" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
