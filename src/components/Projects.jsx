import React from 'react'
import CardProject from './Card/CardProject'

const Projects = () => {
  return (
    <main id='projects' className='max-w-[800px] flex justify-center items-center mx-auto '>
      <section className='mx-6'>
        <h3 className='text-3xl font-bold my-4 border-b-[5px] border-blue-500'>Projects</h3>
        <span>Check out some of my work here</span>
        <section className='flex flex-wrap gap-6 m-4 justify-center items-center'>
          <CardProject/>
          <CardProject/>
          <CardProject/>
          <CardProject/>
          <CardProject/>
          <CardProject/>
        </section>
      </section>
    </main>
  )
}

export default Projects
