import './App.css';
import Input from './components/Input';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Advantages from './components/Advantages';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Input />
        <Advantages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
