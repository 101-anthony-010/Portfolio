import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShowMenu } from './Store/slices/menu.slice'

const Menu = () => {
    const dispatch = useDispatch()
    const { isShowMenu } = useSelector(store => store.menuSlice)

    const handleClickChangeClose = () => dispatch(changeIsShowMenu())
  return (
    <main className={`grid justify-end items-start fixed ${isShowMenu ? "right-0":"-right-full"} transition-all duration-700 w-full top-0 h-screen right-0 z-20`}>
        <div onClick={handleClickChangeClose} className={`${isShowMenu ? "right-0":"-right-full"} transition-all duration-500 fixed top-0 right-0 w-full h-full bg-gray-500/20`}></div>
        <div className={`w-[500px] h-full bg-white relative rounded-md`}>
            <i onClick={handleClickChangeClose} className='top-0 right-0 absolute cursor-pointer p-2 text-xl hover:text-red-500 font-bold bx bx-x'></i>
            <div className='text-center pt-6'>
                <i className='text-9xl bx bxs-castle'></i>
            </div>
            <div className='grid items-center justify-center h-full py-10 text-center text-xl font-bold'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Technologies</a>
                <a href="">Contact</a>
            </div>
        </div>
    </main>
  )
}

export default Menu
