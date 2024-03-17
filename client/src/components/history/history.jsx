import React, { useEffect, useState } from 'react'
import Header from '../ui-break-points/header'
import Footer from '../ui-break-points/footer'
import DetailsUiComponent from '../ui-components/detailsUiComponent'
import axios from 'axios'
import Cookies from 'js-cookie'
const API_URL = import.meta.env.VITE_API_URL

const History = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${API_URL}/getorders`, {
                params: {
                    userId: Cookies.get('userId'),
                    role: Cookies.get('Authorization')
                }
            })
            setOrders(res.data)
        }
        fetchData()
    }, [])
    
    return (
        <div className="text-c-black-500 flex flex-col items-center min-h-[100svh] text-center bg-c-bg justify-between">
            <Header />
            {/* history */}
            <main className='w-full flex flex-1 flex-col items-center py-5 md:py-10 gap-5'>
                <h2 className=' text-3xl md:text-5xl font-bold'> История заказов</h2>
                <div className="w-full items-center flex flex-col gap-3">
                    {orders.map((elem, index) => 
                        <DetailsUiComponent key={index} arr={elem.orderItems} title={elem.timestamp} orderId = {elem._id} deliveryDate={elem.deliveryDate}/>
                    )}
                </div>
            </main>


            <Footer />
        </div>


    )
}

export default History