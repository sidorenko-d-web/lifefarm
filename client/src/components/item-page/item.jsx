import React, { useEffect, useState } from 'react'
import Header from '../ui-break-points/header'
import Footer from '../ui-break-points/footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ErrorHandler } from '../Errors/ErrorHandles'



const item = () => {
    const navigate = useNavigate()

    const query = new URLSearchParams(window.location.search)

    const [itemData, setItemData] = useState({})

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/getitem`, {
            params:{
                id: query.get('id'),
            }
        }).then(res => {
            setItemData(res.data)
        }).catch((error) => {
            new ErrorHandler(error.response.data).handle(navigate)
        })
    }, [])


  return (
    <div className=' bg-c-bg flex flex-col w-full md:justify-between items-center  h-[120svh] text-c-black-500'>
        <Header/>
        {/* item card */}
        <div className=" bg-c-white shadow-c-sh md:h-4/6 w-10/12 md:w-8/12 rounded-3xl py-9 flex flex-col md:flex-row max-sm:items-center md:justify-evenly my-10">
            {/*item img */}
            <div className='md:max-w-[30%]' ><img className="max-sm:w-10/12 md:h-2/3 m-auto object-contain" src={itemData.itemImage} alt="" /></div>
            {/* item content */}
            <div className="flex flex-col w-10/12 md:w-7/12 justify-between gap-7 md:gap-0">
                {/* title and cost */}
                <div className="flex flex-col md:flex-row justify-between text-3xl 2xl:text-5xl">
                    <h2 className='font-semibold'>{itemData.title}</h2>
                    <p  className='font-bold underline'>{itemData.cost}</p>
                </div>
                {/* info */}
                <div className="2xl:text-2xl md:order-3">
                    <div className='border-b border-c-green flex justify-between py-1.5 2xl:py-3'>
                        <span>Производитель</span>
                        <span>{itemData.producer}</span>
                    </div>
                    <div className="border-b border-c-green flex justify-between py-1.5 2xl:py-3">
                        <span>Применение</span>
                        <span>{itemData.purpose}</span>
                    </div>
                    <div className="border-b border-c-green flex justify-between py-1.5 2xl:py-3">
                        <span>Возраст</span>
                        <span>{itemData.years}</span>
                    </div>
                    <div className="border-b border-c-green flex justify-between py-1.5 2xl:py-3">
                        <span>Дозировка</span>
                        <span>{itemData.dose}</span>
                    </div>
                    <div className="border-b border-c-green flex justify-between py-1.5 2xl:py-3">
                        <span>Наличие на складе</span>
                        <span>{itemData.avalibility}</span>
                    </div>
                    <div className="border-b border-c-green flex justify-between py-1.5 2xl:py-3">
                        <span>Вкус</span>
                        <span>{itemData.flavor}</span>
                    </div>
                    <div className="border-b border-c-green flex justify-between py-1.5 2xl:py-3">
                        <span>Шт в упаковке</span>
                        <span>{itemData.pack}</span>
                    </div>
                    <div className="border-b border-c-green flex justify-between py-1.5 2xl:py-3">
                        <span>Рецепт</span>
                        <span>{itemData.prepscription?'Нужен':'Не нужен'}</span>
                    </div> 
                </div>
                {/* btns*/}
                <div className=" flex justify-between 2xl:text-3xl flex-col md:flex-row gap-5">
                    <button className=' bg-c-green  py-3 px-6 rounded-xl font-semibold text-c-white '>Купить сейчас</button>
                    <button className=' bg-c-yellow py-3 px-6 rounded-xl font-semibold'>Добавить в корзину</button>
               
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default item