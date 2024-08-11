import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full '>
        <div className=" bg-c-black-500 flex flex-col items-center justify-center py-7 gap-3">
            <h2 className=" text-c-yellow text-2xl font-semibold">Напишите нам</h2>
            <div className="flex gap-7">
                <a href="#!"><img className="w-10" src="/icons/vk.svg" alt="" /></a>
                <a href="#!"><img className="w-10" src="/icons/telegram.svg" alt="" /></a>
                <a href="#!"><img className="w-10" src="/icons/envelope-solid.svg" alt="" /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer