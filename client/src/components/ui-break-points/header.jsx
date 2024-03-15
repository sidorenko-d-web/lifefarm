import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({isAuth, isAdmin}) => {

  return (
    <header className='bg-c-green flex justify-center w-full shadow-c-sh'>
        <div className="w-2/3 flex gap-1 flex-col md:flex-row items-center justify-between py-4 text-c-white">
            <a href='/' className="uppercase font-semibold text-2xl 2xl:text-4xl">Жизньфарм</a>
            {isAuth?
            <nav className="flex gap-4 items-center">
                <h3 className="underline">Сидоренко Дмитрий</h3>
                {!isAdmin&&<>
                    <a href="/cart" className="w-8"><img src="/cart-shopping-solid.svg" alt="" /></a>
                    <a href="/history" className="w-7"><img src="/clock-rotate-left-solid.svg" alt=""/></a>
                </>}
            </nav>
            :
            <a 
                href="/reg" 
                className="bg-c-yellow text-c-black-500 block  py-1 2xl:py-3 px-6 2xl:px-12 rounded-lg 2xl:rounded-2xl shadow-c-sh 2xl:text-2xl"
            >Войти</a>}
        </div>
    </header>
  )
}

export default Header