import './App.scss';
import HeroSection from './components/hero/hero.component';
import Navigation from './components/nav/nav.component';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
    </div>
  );
}

export default App;
