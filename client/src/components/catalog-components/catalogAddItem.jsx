import React from 'react'

const CatalogAddItem = () => {
  return (
    <div className="w-full flex flex-col gap-3">
        <div className=" rounded-2xl md:rounded-xl 2xl:rounded-3xl bg-c-white shadow-c-sh p-3 2xl:p-6  pt-5 flex flex-col gap-2" >
            <a href="/additem"><img className="w-full" src="./add-item.svg" alt="item" /></a>
            <h3 className=" leading-none text-center text-xl md:text-lg 2xl:text-2xl font-semibold ">Добавить товар</h3>
        </div>
    </div>
  )
}

export default CatalogAddItem