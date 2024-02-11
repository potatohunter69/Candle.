import logo from './logo.svg';
import './App.css';
import './style.css'
import Navbar from './components/Navbar.js'
import WelcomeSection from './components/WelcomeSection';
import FeatureSection from './components/FeatureSection';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';


function App() {
  return (
    <div >
    <div>
        <Navbar />
    </div>
    <WelcomeSection />
    <FeatureSection />
    <ProductShowcase />
    <Footer />
</div>


  );
}

export default App;
