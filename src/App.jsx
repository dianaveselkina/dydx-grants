import './App.css';
import { Route, Routes } from 'react-router-dom';
import { DiscoversPage } from './pages/DiscoversPage';
import { HomePage } from './pages/HomePage';
import { FundedGrantsPage } from './pages/FundedGrantsPage';
import { ExpensesPage } from './pages/ExpensesPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discovers" element={<DiscoversPage />} />
        <Route path="/funded" element={<FundedGrantsPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
      </Routes>
    </div>
  );
}

export default App;
