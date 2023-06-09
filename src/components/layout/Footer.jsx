import React from 'react'

const Footer = () => {
  return (
    <section className=' mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 py-10 dark:bg-slate-900 dark:text-white'>
        <span className='cursor-pointer hover:text-blue-500'>@010.antony.101</span>
        <span>• Copyright ©2023 | All rights reserved •</span>
        <section className='flex gap-4 text-3xl'>
            <i className='hover:text-blue-500 transition-colors bx bxl-github cursor-pointer'></i>
            <i className='hover:text-blue-500 transition-colors bx bxl-linkedin-square cursor-pointer'></i>
            <i className='hover:text-blue-500 transition-colors bx bxl-whatsapp cursor-pointer'></i>
        </section>
    </section>
  )
}

export default Footer
