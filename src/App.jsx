import './App.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { LoadingScreen } from './componets/LoadingScreen'
import { useState } from 'react'
import { Navbar } from './componets/Navbar'
import { MobileMenu } from './componets/MobileMenu'
import { Home } from './componets/sections/Home'
import { About } from './componets/sections/About'
import { Experience } from './componets/sections/Experience'
import { Contact } from './componets/sections/Contact'
import { ToastContainer } from 'react-toastify';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
        <div className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}>

          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home/>
          <About/>
          <Experience/>
          <Contact/>
          <ToastContainer />
        </div>
      
    </>
  )
}

export default App
