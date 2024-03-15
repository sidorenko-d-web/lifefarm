import React, {useState} from 'react'

const CartItem = () => {
    const [itemSummary, setItemSummary] = useState(1)

    const plusSummary = () => {
        setItemSummary(prev => prev + 1)
    }
    const minSummary = () => {
        setItemSummary(prev => prev - 1)
    }

    return (
        <div className="bg-c-white flex max-sm:flex-wrap items-center justify-between shadow-c-sh rounded-xl p-4 gap-5 ">
            {/* item content */}
            <img className='max-sm:w-3/12' src="/image 1.png" alt="" />
            <div className="max-sm:w-2/3">
                <h3 className='text-2xl md:text-4xl font-semibold '>Максиколд Рино</h3>
            </div>
            {/* item controls */}
            <div className="flex flex-row-reverse md:flex-col gap-4 items-center h-full">
                <p className='text-right'>На складе 8шт</p>
                <div className="flex gap-3 text-2xl font-bold">
                    <button className='size-12 rounded-sm bg-gray-300'
                        onClick={minSummary}
                    >{"<"}</button>
                    <input
                      className='size-12 rounded-sm bg-gray-300 text-center ' 
                        type="number" 
                        name="" 
                        id="" 
                        value={itemSummary}
                        onChange={(e) => setItemSummary(e.target.value)}
                    />
                    <button className='size-12 rounded-sm bg-gray-300'
                        onClick={plusSummary}    
                    >{">"}</button>
                </div>
                <p className='text-xl  md:text-4xl font-semibold'>500p</p>
            </div>
        </div>
  )
}

export default CartItem