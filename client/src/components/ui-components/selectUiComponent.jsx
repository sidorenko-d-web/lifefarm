import React, { useState } from 'react'

const SelectUiComponent = ({ arr, setPickUpPoint }) => {
    const [isOpenedList, setIsOpenedList] = useState(false)
    const [currentValue, setCurrentValue] = useState(arr[0])
    return (
        <div className="w-10/12 md:w-6/12 flex flex-col items-center">
            {/* selected */}
            <div onClick={() => setIsOpenedList(prev => !prev)}
                className="z-20  bg-c-white flex justify-between items-center w-full shadow-c-sh py-3 px-3 rounded-full">
                <label className='text-2xl mx-3' htmlFor="">{currentValue}</label>
                <div className={` transition-all bg-c-green text-2xl ${isOpenedList && '-rotate-90'} text-c-white size-9 rounded-full flex justify-center items-center`}>
                    <img className='h-2/3' src="/chevron-left-solid.svg" alt="" />
                </div>
            </div>
            {/* list */}
            {isOpenedList && <div
                className={` origin-top animate-openlist flex flex-col z-10 overflow-hidden bg-c-white shadow-c-sh gap-2 w-full px-2 py-4 pt-12 rounded-b-3xl -mt-7 justify-center items-center`}>
                {
                    arr.map((elem, index) =>
                        elem != currentValue &&
                        <label
                            key={index}
                            className='text-2xl border-b border-c-green mb-2 w-full px-5'
                            htmlFor=""
                            onClick={() => {
                                setCurrentValue(elem)
                                setPickUpPoint(elem)
                                setIsOpenedList(prev => !prev)
                            }}
                        >{elem}</label>
                    )
                }
            </div>}
        </div>
    )
}

export default SelectUiComponent