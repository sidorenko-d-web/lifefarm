import React from 'react'

const Registration = ({setRegState}) => {
    return (
        <form className=" w-9/12 min-w-[350px] md:w-[28%] max-w-[400px] bg-c-white flex flex-col items-center p-7 lg:p-10 rounded-2xl shadow-c-sh">
            {/* form-title */}
            <h1 className="uppercase text-2xl lg:text-3xl font-bold">Регистрация</h1>
                {/* form-inputs */}
                <div className="flex flex-col w-full">
                    <label className="pt-3 lg:pt-5 lg:text-xl" htmlFor="">ФИО*</label>
                    <input className="w-full rounded-none bg-c-white border-b border-c-green p-1 placeholder:text-c-placeholder" type="text" placeholder="Иванов Иван"/>
                
                    <label className="pt-3 lg:pt-5 lg:text-xl" htmlFor="">E-mail*</label>
                    <input className="w-full rounded-none bg-c-white border-b border-c-green p-1 placeholder:text-c-placeholder" type="text" placeholder="example@email.com"/>
                
                    <label className="pt-3 lg:pt-5 lg:text-xl" htmlFor="">Телефон*</label>
                    <input className="w-full rounded-none bg-c-white border-b border-c-green p-1 placeholder:text-c-placeholder" type="text" placeholder="+79123456780"/>
                
                    <label className="pt-3 lg:pt-5 lg:text-xl" htmlFor="">Пароль*</label>
                    <input className="w-full rounded-none bg-c-white border-b border-c-green p-1 placeholder:text-c-placeholder" type="text" placeholder="ваш пароль"/>
                
                    <label className="pt-3 lg:pt-5 lg:text-xl" htmlFor="">Повторите пароль*</label>
                    <input className="w-full rounded-none bg-c-white border-b border-c-green p-1 placeholder:text-c-placeholder" type="text" placeholder="ваш пароль"/>
                
                </div>
                {/* form-submit */}
                <button className="bg-c-green text-c-white text-xl md:text-lg lg:text-xl w-full md:w-11/12 py-2 md:py-1 lg:py-2 rounded-full my-3" 
                    type="submit"
                    onClick={() => navigate('/')}
                >{'Зарегистрироваться'}</button>
                {/* form controls */} 
                <div className="flex flex-col md:flex-row items-center justify-between w-11/12">
                    <a
                        href='/'
                        className="underline hover:no-underline hover:text-gray-400  "
                    >На главную</a>
                    <a className="underline hover:no-underline hover:text-gray-400"
                        onClick={() => setRegState(false)}
                    >Войти </a>
                </div>
        </form>
    )
}

export default Registration