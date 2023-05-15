import React from 'react'

const Header = () => {
  return (
        <section className='flex items-center justify-center gap-10 py-4 shadow-md fixed top-0 w-full'>
            <a className='font-semibold' href="#home">Home</a>
            <a className='font-semibold' href="#about">About</a>
            <a className='font-semibold' href="#projects">Projects</a>
            <a className='font-semibold' href="#technologies">technologies</a>
            <a className='font-semibold' href="#contact">contact</a>
        </section>
  )
}

export default Header