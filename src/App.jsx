import { Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Galeria from './pages/Galeria';

import './App.css';

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='galeria' element={<Galeria />} />
        </Routes>
    </div>
  );
}

export default App;
