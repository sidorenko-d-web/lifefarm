import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
const API_URL = import.meta.env.VITE_API_URL

const CartItem = ({itemImage, title, cost, id, count, incItemCount, decItemCount}) => {
    const [itemData, setItemData] = useState([])
    const navigate = useNavigate()

    const goToItemPage = () => {
        navigate(`/item?id=${id}`)
    }

    const plusSummary = () => {
        incItemCount(id, itemData.avalibility)
    }
    const minSummary = () => {
        decItemCount(id)
    }

    const deleteCartItem = async () => {
        try {
            window.location.reload(true)
            await axios.delete(`${API_URL}/deletecartitem`, {
                params: {
                    id
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${API_URL}/getitem`, {
                params: {
                    id
                }
            })
            setItemData(res.data)
        }
        try {
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="bg-c-white flex max-sm:flex-wrap items-center justify-between shadow-c-sh rounded-xl p-4 gap-5 relative">
            <button
                onClick={deleteCartItem}
                className="absolute w-20 aspect-square active:bg-c-red bg-gray-300 rounded-full right-0 translate-x-[140%] flex justify-center items-center text-5xl font-extrabold text-c-white"
            >
                Х
            </button>
            {/* item content */}
            <img className='w-2/12 aspect-square cursor-pointer' src={itemImage} onClick={goToItemPage} alt="" />
            <div className="max-sm:w-2/3">
                <h3 className='text-2xl md:text-4xl font-semibold cursor-pointer underline'  onClick={goToItemPage}>{title}</h3>
            </div>
            {/* item controls */}
            <div className="flex flex-row-reverse md:flex-col gap-4 items-center h-full">
                <p className={`text-right`}>На складе {itemData.avalibility} шт</p>
                <div className="flex gap-3 text-2xl font-bold">
                    <button className='size-12 rounded-sm bg-gray-300'
                        onClick={minSummary}
                    >{"<"}</button>
                    <div className={`size-12 flex items-center justify-center rounded-sm bg-gray-300  text-center`}>
                        {count}
                    </div>
                    <button className='size-12 rounded-sm bg-gray-300'
                        onClick={plusSummary}    
                    >{">"}</button>
                </div>
                <p className='text-xl  md:text-4xl font-semibold'>{cost*count}p</p>
            </div>
        </div>
  )
}

export default CartItem