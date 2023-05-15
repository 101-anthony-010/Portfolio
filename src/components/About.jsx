import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main id='about' className='max-w-[800px] flex justify-center items-center mx-auto'>
        <section className='mx-6'>
        <h2 className='text-3xl w-full font-bold my-4 border-b-[5px] border-blue-500'>About me</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis auctor lacus, vitae pretium libero viverra sit amet. Donec eu pretium libero. Phasellus leo purus, gravida sit amet sapien ac, suscipit hendrerit turpis. Sed quis iaculis justo. Nulla ac erat vel elit scelerisque consectetur pretium eget diam. Vivamus auctor, dolor vitae vestibulum ornare, eros ex sodales lorem, ac pellentesque arcu felis at elit. Fusce consequat vehicula quam at pharetra.
        </p>
        <Link to='/about-me' className='py-3 px-10 bg-blue-500 text-white rounded-md m-4 font-semibold inline-block'>See more <i className='bx bx-chevron-right-circle'></i></Link>
        </section>
    </main>
  )
}

export default About
