import './App.css';
import { Route, Routes } from 'react-router-dom';
import { DiscoversPage } from './pages/DiscoversPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discovers" element={<DiscoversPage />} />
      </Routes>
    </div>
  );
}

export default App;
