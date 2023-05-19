import Home from '../Home'
import About from '../About'
import Projects from '../Projects'
import Technologies from '../Technologies'
import Contact from '../Contact'
import Header from '../layout/Header'

const HomePage = () => {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Technologies/>
      <Contact/>
    </>
  )
}

export default HomePage