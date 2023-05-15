import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='max-w-[800px] flex flex-col justify-center items-center mx-auto'>
      <h2 className='text-3xl font-bold my-4 border-b-[5px] border-blue-500 w-full'>Contact</h2>
      <section className='flex flex-col sm:flex-row gap-5 mx-4 bg-slate-200 rounded-md px-5 py-3 mt-1'>
        <section className='flex gap-6 flex-col justify-center items-center px-6 w-[300px]'>
          <h4 className='font-semibold text-xl'>Get in touch</h4>
          <span>I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</span>
          <section className='grid gap-4'>
            <div className='flex gap-2'>
              <i className='bx bx-phone text-2xl'></i>
              <span className='text-sm'>+51 960 915 888</span>
            </div>
            <div className='flex gap-2'>
              <i className='bx bx-envelope text-2xl'></i>
              <span className='text-sm'>gonzalescamposantony@gmail.com</span>
            </div>
          </section>
        </section>
        <form className='max-w-[300px] mx-auto p-3'>
          <h4 className='text-xl font-semibold pt-1'>Send me a message</h4>
          <div className='text-sm my-6 flex flex-col gap-2'>
            <input type="text" className='rounded-md px-4 py-1' placeholder='Name'/>
            <input type="email" className='rounded-md px-4 py-1' placeholder='Email Adress'/>
            <input type="text" className='rounded-md px-4 py-1' placeholder='Subject'/>
            <textarea type="text" className='rounded-md px-4 py-1 h-[150px]' placeholder='Your message'></textarea>
          </div>
          <button className='px-4 py-2 bg-blue-500 rounded-md text-white'>Send message</button>
        </form>
      </section>    
    </section>
  )
}

export default Contact
