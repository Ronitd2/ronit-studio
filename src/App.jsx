import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import './App.css'
import GalleryPage from "./Pages/GalleryPage"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import FilmPage from "./Pages/FilmPage"
import Faq from "./Pages/Faq"
import Option from './Pages/Option'
import RiceCeremony from './Pages/RiceCeremony'

function App() {
  

  return (
    <>
      {/* <div className='w-full flex justify-center items-center'>
        <div className="main  overflow-hidden sm:w-[640px] md:w-[768px] lg:w-[1024px] min-[1440px]:w-[1440px]"> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path='/option' element={<Option />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/filmpage' element={<FilmPage />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/riceceremony-gallery' element={<RiceCeremony />} />
          </Routes>
        {/* </div>
      </div> */}
    </>
  )
}

export default App
