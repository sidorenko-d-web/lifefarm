import React, { useEffect, useState } from 'react'
import Header from '../ui-break-points/header'
import Footer from '../ui-break-points/footer'
import CartItem from './cartItem'
import PickUpPoints from './pickUpPoints'
import axios from 'axios'
import Cookies from 'js-cookie'
const API_URL = import.meta.env.VITE_API_URL

const Cart = () => {

    const [cartItems, setCartItems] = useState([])
    const [pickUpPoint, setPickUpPoint] = useState('ул. Ленина 61к1')

    const incItemCount = (id, avalibility) => {
        const newState = cartItems.map(item => {
            if(item.itemId === id && item.count < avalibility){
                return {...item, count: item.count + 1}
            }
            return item
        })
        setCartItems(newState)
    }

    const decItemCount = (id) => {
        const newState = cartItems.map(item => {
            if(item.itemId === id && item.count > 0){
                return {...item, count: item.count - 1}
            }
            return item
        })
        setCartItems(newState)
    }

    const createOrder = async () => {
        const orderItems = cartItems.map(elem => 
           ({
                itemId: elem.itemId,
                title: elem.item.title, 
                count: elem.count,
                cost: elem.item.cost*elem.count
            })
        )
        try {
            await axios.post(`${API_URL}/createorder`, {
                userId: Cookies.get('userId'),
                orderItems,
                pickUpPoint,
                timestamp: new Date().getTime()
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${API_URL}/getcartitems`, {
                params: {
                    userId: Cookies.get('userId')
                }
            })
            const data = res.data
            data.forEach(elem => {
                elem.count = 1
            });
            setCartItems(data)
        }
        fetchData()
    }, [])

    return (
        <div className=' bg-c-bg text-c-black-500 flex flex-col min-h-[100vh] gap-12'>
            <Header />
            {/* cart */}
            <main className=" flex flex-col items-center min-h-[80svh]">
                {/* cart list */}
                <h2 className='text-5xl font-bold pb-12'>Корзина</h2>
                {/* cart list */}
                <div className="flex flex-col w-11/12 md:w-8/12 gap-8">
                    {/* cart item */}
                    {cartItems[0] ?
                        cartItems.map(elem =>
                            <CartItem
                                key={elem.itemId}
                                id={elem.itemId}
                                itemImage={elem.item.itemImage}
                                title={elem.item.title}
                                cost={elem.item.cost}
                                count={elem.count}
                                incItemCount={incItemCount}
                                decItemCount={decItemCount}
                            />
                        ) :
                        <h2 className='text-2xl text-center font-bold'>
                            Упс... А корзина пока пуста
                        </h2>
                    }
                </div>
                {cartItems[0] &&
                    <>
                        {/* pick up points */}
                        <PickUpPoints setPickUpPoint={setPickUpPoint}/>
                        {/* order result */}
                        <div className="flex  bg-c-yellow rounded-md w-11/12 md:w-9/12 justify-between items-center p-4 mt-10">
                            {/* summary */}
                            <div className="flex flex-col">
                                <span className='text-2xl'>Итого</span>
                                <span className=" underline text-3xl md:text-5xl font-bold">{
                                    cartItems.reduce((acc, elem) =>
                                        acc + elem.count * elem.item.cost, 0
                                    )}p</span>
                            </div>
                            {/* order btn */}
                            <button className="bg-c-green text-c-white text-3xl py-2 px-5 md:px-9 rounded-xl" onClick={createOrder}>Заказать</button>
                        </div>
                    </>
                }
            </main>
            <Footer />
        </div>
    )
}

export default Cart