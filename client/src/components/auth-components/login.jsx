import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const API_URL = import.meta.env.VITE_API_URL

const Login = ({ setRegState }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    })

    const [emailErr, setEmailErr] = useState(false)
    const [passErr, setPassErr] = useState(false)

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            const res = await axios.get(`${API_URL}/getuser`, {
                params: data
            })
            if (res.data.access) {
                navigate('/')
            } else {
                if (res.data.msg === 'icp') {
                    setPassErr(true)
                } else if (res.data.msg === 'und') {
                    setEmailErr(true)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className=" w-9/12 min-w-[350px] md:w-[28%] max-w-[400px] bg-c-white flex flex-col items-center p-7 lg:p-10 rounded-2xl shadow-c-sh" onSubmit={handleSubmit(onSubmit)}>
            {/* form-title */}
            <h1 className="uppercase text-2xl lg:text-3xl font-bold">Войти</h1>
            {/* form-inputs */}
            <div className="flex flex-col w-full">
                <label className="pt-3 lg:pt-5 lg:text-xl" htmlFor="">E-mail</label>
                {emailErr && <h3 className='text-c-red'>Пользователь с таким E-mail не найден</h3>}
                <input className={`w-full rounded-none bg-c-white border-b ${errors?.email ? 'border-c-red placeholder:text-c-red' : 'border-c-green'} p-1 placeholder:text-c-placeholder`}
                    type="text"
                    placeholder="example@email.com"
                    {...register('email', {
                        required: true,
                        onChange: e => {
                            setEmailErr(false)
                        }
                    })}
                />

                <label className="pt-3 lg:pt-5 lg:text-xl" htmlFor="">Пароль</label>
                {passErr && <h3 className='text-c-red'>Не правильный пароль</h3>}
                <input className={`w-full rounded-none bg-c-white border-b ${errors?.pass ? 'border-c-red placeholder:text-c-red' : 'border-c-green'} p-1 placeholder:text-c-placeholder`}
                    type="password"
                    {...register('pass', {
                        required: true,
                        onChange: e => {
                            setPassErr(false)
                        }
                    })}
                />
            </div>
            {/* form-submit */}
            <button className="bg-c-green text-c-white text-xl md:text-lg lg:text-xl w-full md:w-11/12 py-2 md:py-1 lg:py-2 rounded-full my-3"
                type="submit"
            >{'Войти'}</button>
            {/* form controls */}
            <div className="flex flex-col md:flex-row items-center justify-between w-11/12">
                <a
                    href='/'
                    className="underline hover:no-underline hover:text-gray-400  "
                >На главную</a>
                <a className="underline hover:no-underline hover:text-gray-400"
                    onClick={() => setRegState(true)}
                >Зарегистрироваться </a>
            </div>
        </form>
    )
}

export default Login