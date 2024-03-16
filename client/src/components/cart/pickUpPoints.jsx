import React, { useState } from 'react'
import SelectUiComponent from '../ui-components/selectUiComponent'

const PickUpPoints = ({ setPickUpPoint }) => {
    const arr = ['ул. Ленина 61к1', 'ул. Ленина 61к2', 'ул. Ленина 61к3', 'ул. Ленина 61к4', 'ул. Ленина 61к5']
    
    return (
        <>
            <h2 className='text-4xl font-semibold text-center  py-8'>Выберите пункт выдачи</h2>
            <SelectUiComponent arr={arr} setPickUpPoint={setPickUpPoint} />
        </>
    )
}

export default PickUpPoints