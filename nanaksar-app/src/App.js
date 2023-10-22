import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home';
import Lives from './Components/Lives';
import PDF from './Components/PDF';
import Gurdwaras from './Components/Gurdwaras';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/lives">Lives</Link>
                <Link to="/pdf">PDFs</Link>
                <Link to="/gurdwaras">Gurdwaras</Link>
              </li>
            </ul>
          </nav>
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/lives" element={<Lives />}/>
          <Route path="/pdf" element={<PDF />}/>
          <Route path="/gurdwaras" element={<Gurdwaras />}/>
        </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
