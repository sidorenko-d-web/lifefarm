import React, { useEffect, useState } from 'react'
import Header from '../ui-break-points/header'
import Footer from '../ui-break-points/footer'
import CartItem from './cartItem'
import PickUpPoints from './pickUpPoints'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
const API_URL = import.meta.env.VITE_API_URL

const Cart = () => {

    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState([])
    const [pickUpPoint, setPickUpPoint] = useState('ул. Ленина 61к1')
    const [deliveryDays, setDeliveryDays] = useState(2)

    const incItemCount = (id, avalibility) => {
        setDeliveryDays('5')
        const newState = cartItems.map(item => {
            if(item.itemId === id){
                if(item.count >= avalibility){
                    setDeliveryDays(5)
                }else{
                    setDeliveryDays(2)
                }
                return {...item, count: item.count + 1}
            }else{
                return item
            }
        })
        setCartItems(newState)
    }

    const decItemCount = (id, avalibility) => {
        const newState = cartItems.map(item => {
            if(item.itemId === id && item.count > 0){
                if(item.count > avalibility + 1){
                    setDeliveryDays(5)
                }else{
                    setDeliveryDays(2)
                }
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
            const todayDate = new Date()
            await axios.post(`${API_URL}/createorder`, {
                userId: Cookies.get('userId'),
                orderItems,
                pickUpPoint,
                deliveryDate: todayDate.addDays(deliveryDays).getTime(),
                timestamp: todayDate.getTime()
            })
            clearCart()
            navigate('/history')
        } catch (error) {
            console.log(error)
        }
    }

    const clearCart = async () => {
        try {
            window.location.reload(true)
            await axios.delete(`${API_URL}/clearcart`, {
                params: {
                    userId: Cookies.get('userId')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
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

    const calculateTotalSum = () => {
        const total = cartItems.reduce((acc, elem) => acc + elem.count * elem.item.cost, 0)
        
        if(total > 2000){
            const discount = total * 95/100
            return (
                <>
                    {`${discount}р`} <span className='text-xl line-through'>{total}</span>
                </>
            )
        }else{
            return `${total}р`
        }
    
    }

    return (
        <div className=' bg-c-bg text-c-black-500 flex flex-col min-h-[100vh] gap-12'>
            <Header />
            {/* cart */}
            <main className=" relative flex flex-col items-center min-h-[80svh]">
                {/* cart list */}
                <h2 className='text-5xl font-bold pb-12'>Корзина</h2>
                {cartItems[0] && <button onClick={clearCart} className=" md:absolute px-5 py-2 mb-6 md:right-0 md:-translate-x-[30%] active:bg-c-red bg-gray-300 rounded-full   text-2xl font-bold text-c-black-500">Очистить корзину</button>}
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
                        <div className="flex flex-wrap gap-4 bg-c-yellow rounded-md w-11/12 md:w-9/12 justify-between items-center p-4 mt-10">
                            {/* summary */}
                            <div className="flex flex-col order-1">
                                <span className='text-2xl'>Итого</span>
                                <span className=" underline text-3xl md:text-5xl font-bold">{calculateTotalSum()}</span>
                            </div>
                            {/* order date */}
                            <div className='text-2xl md:order-2'>
                                Заказ будет доставлен через {' '}
                                { deliveryDays == 2 ? deliveryDays + ' дня': deliveryDays + ' дней'}
                            </div>
                            {/* order btn */}
                            <button className="bg-c-green text-c-white text-3xl py-2 px-5 md:px-9 rounded-xl order-2" onClick={createOrder}>Заказать</button>
                        </div>
                    </>
                }
            </main>
            <Footer />
        </div>
    )
}

export default Cart