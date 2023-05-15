import React from 'react'

const CardProject = ({props}) => {
  return (
    <section className={`w-[220px] h-[180px] shadow-inner ${props.border} rounded-md relative`}>
      <div className='absolute text-9xl flex flex-col justify-center items-center left-1/2 -translate-x-1/2'>
        <i className={`${props.style}`}></i>
        <span className='text-2xl font-bold'>{props.name}</span>
      </div>
    </section>
  )
}

export default CardProject
