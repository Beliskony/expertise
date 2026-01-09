import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Header from './component/Header'
import Services from './pages/Services'
import { Footer } from './component/Footer'
import Contact from './pages/Contact'
import Actualites from './pages/Actualites'


function App() {

  return (
    <BrowserRouter>
     <Header />
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/services' element={<Services />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/actualites' element={<Actualites />} />
       </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
