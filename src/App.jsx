import './App.css'

import { Route, Routes } from 'react-router-dom'

import HomePage from './components/pages/HomePage'
import NotFound from './components/pages/NotFound'
import Header from './components/Header'
import AboutMe from './components/pages/AboutMe'
import Footer from './components/Footer'

function App() {

  return (
    <main className=''>      
    <Header/>
    <Routes>
      <Route path="" element={<HomePage/>}/>
      <Route path="/about-me" element={<AboutMe/>}/>
      <Route path="/*" element={<NotFound/>}/>      
    </Routes>
    <Footer/>
    </main>
  )
}

export default App
