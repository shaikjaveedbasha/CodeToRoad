import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables.min.js'
import Navbar from './CodeToRoad/Navbar';
import Footer from './CodeToRoad/Footer';
import Routing from './CodeToRoad/Routing';
import { createContext, useState } from 'react';





export const loginStatus = createContext()

function App() {
  const [login, setLogin] = useState(false)
  return (
    <>
      <loginStatus.Provider value={[login, setLogin]}>
        <Navbar />
        <Routing />
        <Footer />
      </loginStatus.Provider>


    </>
  );
}

export default App;