import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Watchlist from './pages/Watchlist/Watchlist';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  )
}

export default App
