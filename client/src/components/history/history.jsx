import React from 'react'
import Header from '../ui-break-points/header'
import Footer from '../ui-break-points/footer'
import DetailsUiComponent from '../ui-components/detailsUiComponent'

const History = () => {

    const historyArray1 = [
        'Максиколд1',
        'Максиколд2',
        'Максиколд3',
        'Максиколд4',
        'Максиколд5'
    ]

  return (
    <div className="text-c-black-500 flex flex-col items-center min-h-[100svh] text-center bg-c-bg justify-between">
        <Header />
        {/* history */}
        <main className='w-full flex flex-1 flex-col items-center py-5 md:py-10 gap-5'>
            <h2 className=' text-3xl md:text-5xl font-bold'> История заказов</h2>
            <div className="w-full items-center flex flex-col gap-3">
                <DetailsUiComponent title={'заказ'} cost={'2500p'} arr={historyArray1}/>
                <DetailsUiComponent title={'заказ'} cost={'2500p'} arr={historyArray1}/>
                <DetailsUiComponent title={'заказ'} cost={'2500p'} arr={historyArray1}/>
                <DetailsUiComponent title={'заказ'} cost={'2500p'} arr={historyArray1}/>
            </div>
        </main>


        <Footer />
    </div>


  )
}

export default History