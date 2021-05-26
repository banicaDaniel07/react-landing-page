import './App.scss';
import About from './components/about/about.component';
import FeaturesSection from './components/features/features.component';
import HeroSection from './components/hero/hero.component';
import Navigation from './components/nav/nav.component';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <FeaturesSection/>
      <About/>
    </div>
  );
}

export default App;
