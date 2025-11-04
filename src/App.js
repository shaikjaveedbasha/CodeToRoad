import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Navbar from './CodeToRoad/Navbar';
import Footer from './CodeToRoad/Footer';
import Routing from './CodeToRoad/Routing';


function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;