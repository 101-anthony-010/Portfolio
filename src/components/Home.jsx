import TypingAnimation from "./Utils/Typed"

const Home = () => {
  
  return (
    <main id='home' className='flex flex-wrap m-6 pt-20 justify-center gap-8'>
      <section className='max-w-md'>
        <h1 className='font-bold text-3xl p-3'>I'm Antony Gonzales</h1>
        <h3 className='font-semibold bg-slate-200 p-2 mx-auto my-2 text-xl'><TypingAnimation/></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat purus arcu, quis porttitor turpis cursus in. Proin nulla tellus, eleifend ut tincidunt et, convallis sit amet risus. Nullam imperdiet non eros commodo consequat. Nam iaculis blandit augue, nec interdum risus luctus faucibus. Nunc rutrum lorem vitae tincidunt scelerisque. Integer iaculis vehicula turpis, sit amet aliquam dui pulvinar sit amet. Aenean nec maximus eros, ut laoreet est. Donec sollicitudin est et convallis pellentesque.</p>
        <button className='py-3 px-5 bg-blue-500 text-white rounded-md m-4 font-semibold grid grid-cols-[1fr_auto] text-center items-center'>About me <i className='pl-3 text-xl bx bx-chevron-right-circle'></i></button>
      </section>
      <div className='w-[300px] h-[400px] hover:w-[310px] hover:h-[410px] transition-all duration-500'>
        <img className='w-full h-full object-cover rounded-xl' src="/images/antony.png" alt="" />
      </div>
    </main>
  )
}

export default Home
