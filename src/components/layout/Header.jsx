import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeIsShowMenu } from '../Store/slices/menu.slice'
import { Link as ScrollLink } from 'react-scroll'

const Header = () => {
  const [theme, setTheme] = useState('light')

  const dispatch = useDispatch()

  const handleClinkThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  const handleClickChangeIsShowMenu = () => {
    dispatch(changeIsShowMenu())
  }

  useEffect(() => {
    if (theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  return (
        <section className={`gap-10 py-4 dark:bg-slate-900 dark:text-white shadow-md fixed top-0 w-full bg-white z-10`}>
          <div className='absolute top-0 left-0 text-2xl z-30'>
            <i onClick={handleClinkThemeChange} className={`transition-all duration-200 absolute top-5 left-5 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'} cursor-pointer bx bx-moon`}></i>
            <i onClick={handleClinkThemeChange} className={`transition-all duration-200 absolute top-5 left-5 opacity-0 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} cursor-pointer bx bx-sun`}></i>
          </div>
          <div className='flex justify-center gap-4 mx-auto opacity-0 sm:opacity-100 z-20'>
            <ScrollLink className='cursor-pointer font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' to="home" smooth={true} duration={800}>Home</ScrollLink>
            <ScrollLink className='cursor-pointer font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' to="about" smooth={true} duration={800}>About</ScrollLink>
            <ScrollLink className='cursor-pointer font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' to="projects" smooth={true} duration={800}>Projects</ScrollLink>
            <ScrollLink className='cursor-pointer font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' to="technologies" smooth={true} duration={800}>Technologies</ScrollLink>
            <ScrollLink className='cursor-pointer font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' to="contact" smooth={true} duration={800}>Contact</ScrollLink>
          </div>
          <div className='relative'>
            <div className='absolute -top-7 sm:opacity-0 right-10 text-2xl'>
              <i onClick={handleClickChangeIsShowMenu} className='bx bx-menu cursor-pointer'></i>
            </div>
          </div>
        </section>
  )
}

export default Header