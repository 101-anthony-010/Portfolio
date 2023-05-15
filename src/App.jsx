import './App.css'

import { Route, Routes } from 'react-router-dom'

import HomePage from './components/pages/HomePage'
import NotFound from './components/pages/NotFound'
import Header from './components/layout/Header'
import AboutMe from './components/pages/AboutMe'
import Footer from './components/layout/Footer'
import Menu from './components/Menu'

function App() {

  return (
    <main className='min-h-screen'>      
      <Header/>
      <Menu/>
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
