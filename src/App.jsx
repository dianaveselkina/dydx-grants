import './App.css';
import { Route, Routes } from 'react-router-dom';
import { DiscoversPage } from './pages/DiscoversPage';
import { HomePage } from './pages/HomePage';
import { FundedGrantsPage } from './pages/FundedGrantsPage';
import { ExpensesPage } from './pages/ExpensesPage';
import { BlogPage } from './pages/BlogPage';
import { ApplicationPage } from './pages/ApplicationPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discovers" element={<DiscoversPage />} />
        <Route path="/funded" element={<FundedGrantsPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/application" element={<ApplicationPage />} />
      </Routes>
    </div>
  );
}

export default App;
