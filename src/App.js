import './App.scss';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import FeaturesSection from './components/features/features.component';
import Footer from './components/footer/footer.component';
import Gallery from './components/gallery/gallery.component';
import HeroSection from './components/hero/hero.component';
import Navigation from './components/nav/nav.component';
import OurTeam from './components/our-team/our-team.component';
import Services from './components/services/services.component';
import Testimonials from './components/testimonials/testimonials.component';

function App() {
  return (
    <div className="App" id="app">
      <Navigation/>
      <HeroSection/>
      <FeaturesSection/>
      <About/>
      <Services/>
      <Gallery/>
      <Testimonials/>
      <OurTeam/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
