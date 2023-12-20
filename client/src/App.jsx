import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import { Services } from './Components/Services/Services';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
