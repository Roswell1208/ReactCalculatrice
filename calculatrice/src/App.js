import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Calc from './pages/Calc';
import Histo from './pages/Histo';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/calculatrice" element={<Calc />} />
            <Route path="/historique" element={<Histo />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
