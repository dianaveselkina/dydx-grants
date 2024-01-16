import './App.css';
import { Featured } from './components/Featured/Featured';
import { Footer } from './components/Footer/Footer';
import { Frequently } from './components/Frequently/Frequently';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { News } from './components/News/News';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <News />
      <Frequently />
      <Footer />
    </div>
  );
}

export default App;
