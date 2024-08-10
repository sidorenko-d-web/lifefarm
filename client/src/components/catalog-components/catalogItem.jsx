import axios from 'axios'
import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const API_URL = import.meta.env.VITE_API_URL

const CatalogItem = ({ id, title, cost, itemImage }) => {
    const navigate = useNavigate()
    const handleAddItemToCart = async () => {
        try {
            if(!Cookies.get('userId')){
                return navigate('/reg')
            }
            await axios.post(`${API_URL}/creatcartitem`, {
                userId: Cookies.get('userId'),
                item:{
                    title,
                    cost,
                    itemImage,
                },
                itemId: id,
                timestamp: new Date().getTime()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="w-full flex flex-col gap-3">
            <div className=" rounded-2xl md:rounded-xl 2xl:rounded-3xl bg-c-white shadow-c-sh p-3 2xl:p-6   flex flex-col justify-between gap-2" >
                <a href={`/item?id=${id}`}> <img className='w-full rounded-lg aspect-square' src={itemImage} alt="item" /></a>
                <h3 className=" leading-none text-right text-xl 2xl:text-2xl font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden">{title}</h3>
                <p className=" text-right text-3xl md:text-2xl 2xl:text-4xl font-bold">{cost}р</p>
            </div>
            <button className="bg-c-green active:bg-green-900 hover:bg-green-700 transition-all text-xl md:text-base 2xl:text-2xl rounded-2xl md:rounded-xl 2xl:rounded-3xl w-full text-c-white px-2 py-2 leading-1 md:leading-none font-semibold shadow-c-sh" onClick={handleAddItemToCart}>Добавить в<br />корзину</button>
        </div>
    )
}

export default CatalogItem