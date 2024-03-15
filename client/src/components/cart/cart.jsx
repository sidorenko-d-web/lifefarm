import React from 'react'
import Header from '../ui-break-points/header'
import Footer from '../ui-break-points/footer'
import CartItem from './cartItem'
import PickUpPoints from './pickUpPoints'

const Cart = () => {
    


  return (
    <div className=' bg-c-bg text-c-black-500 flex flex-col min-h-[100vh] gap-12'>
        <Header/>
        {/* cart */}
        <main className=" flex flex-col items-center min-h-[80svh]">
            {/* cart list */}
            <h2 className='text-5xl font-bold pb-12'> Корзина</h2>
            {/* cart list */}
            <div className="flex flex-col w-11/12 md:w-8/12 gap-8">
                {/* cart item */}
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            {/* pick up points */}
            <PickUpPoints />
            {/* order result */}
            <div className="flex  bg-c-yellow rounded-md w-11/12 md:w-9/12 justify-between items-center p-4 mt-10">
                {/* summary */}
                <div className="flex flex-col">
                    <span className='text-2xl'>Итого</span>
                    <span className=" underline text-3xl md:text-5xl font-bold">2500p</span>
                </div>
                {/* order btn */}
                <div className="bg-c-green text-c-white text-3xl py-2 px-5 md:px-9 rounded-xl">Заказать</div>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Cart