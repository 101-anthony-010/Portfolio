import React from 'react'

import CardTechnologies from './Card/CardTechnologies'

const Technologies = () => {
  return (
    <section id='technologies' className='max-w-[800px] flex justify-center items-center mx-auto'>
      <section className='mx-6'>
        <h2 className='text-3xl font-bold my-4 border-b-[5px] border-blue-500 w-full'>Technologies</h2>
        <span>These are the technologies I've worked with</span>
        <section className='flex flex-wrap gap-6 m-4 justify-center items-center'>
          <CardTechnologies/>
          <CardTechnologies/>
          <CardTechnologies/>
          <CardTechnologies/>
          <CardTechnologies/>
        </section>
      </section>
    </section>
  )
}

export default Technologies