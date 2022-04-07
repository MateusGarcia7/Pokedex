import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Lobby from './components/Lobby';
import Pokedex from './components/Pokedex';
import PokeInfo from './components/PokeInfo';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  return (
    <HashRouter>
    <div className="App">
  
      <Routes>
        <Route path="/" element={<Lobby/>} />
        <Route element={<ProtectedRoutes/>} />
         <Route path="/pokedex" element={<Pokedex/>} />
         <Route path="/pokedex/:id" element={<PokeInfo/>} />

      </Routes>
   
    </div>
    </HashRouter>
  );
}

export default App;

