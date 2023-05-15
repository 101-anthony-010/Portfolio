import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main id='about' className='max-w-[800px] flex justify-center items-center mx-auto pt-16'>
        <section className='mx-6'>
        <h2 className='text-3xl w-full font-bold my-4 border-b-[5px] border-blue-500'>About me</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis auctor lacus, vitae pretium libero viverra sit amet. Donec eu pretium libero. Phasellus leo purus, gravida sit amet sapien ac, suscipit hendrerit turpis. Sed quis iaculis justo. Nulla ac erat vel elit scelerisque consectetur pretium eget diam. Vivamus auctor, dolor vitae vestibulum ornare, eros ex sodales lorem, ac pellentesque arcu felis at elit. Fusce consequat vehicula quam at pharetra.
        </p>
        <Link to='/about-me' className=' font-semibold inline-block '>
          <button className='py-3 px-5 bg-blue-500 text-white rounded-md m-4 grid grid-cols-[1fr_auto] items-center'>See more <i className='bx bx-chevron-right-circle pl-3 text-xl'></i></button>
        </Link>
        </section>
    </main>
  )
}

export default About
