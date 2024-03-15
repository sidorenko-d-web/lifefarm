import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './login'
import Registration from './registration'

const RegForm = () => {
    const [regState, setRegState] = useState(false)

    const navigate = useNavigate()

    return (
    
    <div className=" bg-registration w-[100svw] h-[100svh] bg-cover bg-center flex items-center justify-center text-c-black-500">
        {/* reg-form */}
        {regState?
            <Registration setRegState={setRegState}/> 
        :
            <Login setRegState={setRegState}/>
        }
    </div>
  )
}

export default RegForm