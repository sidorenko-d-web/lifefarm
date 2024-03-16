import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const DetailsUiComponent = ({ arr, title }) => {
    const [isOpenedList, setIsOpenedList] = useState(false)
    let cost = 0
    arr.forEach(elem => {
        cost += elem.cost
    });
    const [orderCost, setOrderCost] = useState(cost)
    const navigate = useNavigate()
    return (
        <div className="w-11/12 md:w-5/12 flex flex-col items-center">
            {/* selected */}
            <div onClick={() => setIsOpenedList(prev => !prev)} className="z-20 bg-c-white flex justify-between items-center w-full shadow-c-sh py-3 px-3 rounded-[30px]">
                <label className='text-xl mx-3' >{orderCost}</label>
                <label className='text-2xl mx-3' >{
                    `${new Date(title).getDate()}-${new Date(title).getMonth()}-${new Date(title).getFullYear()} `
                }</label>
                <div className={` transition-all bg-c-green text-2xl ${isOpenedList && '-rotate-90'} text-c-white size-9 rounded-full flex justify-center items-center`}>
                    <img className='h-2/3' src="/chevron-left-solid.svg" alt="" />
                </div>
            </div>
            {/* list */}
            {isOpenedList && <div className={` origin-top animate-openlist flex flex-col z-10 bg-c-white shadow-c-sh w-full px-2 py-4 pt-12 rounded-lg -mt-10  justify-center items-center`}>
                {
                    arr.map((elem, index) =>
                        <div key={index} className='flex justify-between px-4 text-center text-2xl mx-3 border-b border-c-green mb-2 w-full' >
                            <span>{elem.cost}р</span>
                            <span className='underline cursor-pointer' onClick={() => navigate(`/item?id=${elem.itemId}`)}>{elem.title}</span>
                            <span>{elem.count}шт</span>
                        </div>
                    )
                }
            </div>}
        </div>
    )
}

export default DetailsUiComponent