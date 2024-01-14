import './App.css';
import { Featured } from './components/Featured/Featured';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
