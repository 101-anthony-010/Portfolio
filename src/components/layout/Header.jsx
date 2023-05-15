import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShowMenu } from '../Store/slices/menu.slice'

const Header = () => {
  const dispatch = useDispatch()

  const handleClickChangeIsShowMenu = () => dispatch(changeIsShowMenu())
  return (
        <section className={`gap-10 py-4 shadow-md fixed top-0 w-full bg-white z-10`}>
          <div className='flex justify-center gap-4 mx-auto opacity-0 sm:opacity-100'>
            <a className='font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' href="#home">Home</a>
            <a className='font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' href="#about">About</a>
            <a className='font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' href="#projects">Projects</a>
            <a className='font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' href="#technologies">Technologies</a>
            <a className='font-semibold hover:bg-blue-500/50 px-3 py-1 rounded-md' href="#contact">Contact</a>
          </div>
          <div className='relative'>
            <div className='absolute -top-7 sm:opacity-0 right-10 text-2xl'>
              <i onClick={handleClickChangeIsShowMenu} className='bx bx-menu cursor-pointer' ></i>
            </div>
          </div>
        </section>
  )
}

export default Header