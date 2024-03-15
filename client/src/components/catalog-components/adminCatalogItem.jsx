import axios from 'axios'
import React from 'react'

const AdminCatalogItem = ({id, title, cost, itemImage}) => {

  const deleteItem = async () => {
    console.log(import.meta.env.VITE_API_URL)
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteitem`, {
        params:{
          id
        }
      })
      if(res){
        window.location.reload(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full flex flex-col gap-3">
        <div className=" rounded-2xl md:rounded-xl 2xl:rounded-3xl bg-c-white shadow-c-sh p-3 2xl:p-6   flex flex-col justify-between gap-2" >
            <a href={`/edititem?id=${id}`}> <img className='w-full rounded-lg aspect-square' src={itemImage} alt="item" /></a>
            <h3 className=" leading-none text-right text-xl 2xl:text-2xl font-semibold ">{title}</h3>
            <p className=" text-right text-3xl md:text-2xl 2xl:text-4xl font-bold">{cost}р</p>
        </div>
        <button className="bg-c-red text-xl md:text-base 2xl:text-2xl rounded-2xl md:rounded-xl 2xl:rounded-3xl w-full text-c-white px-2 py-2 leading-1 md:leading-none font-semibold shadow-c-sh" onClick={deleteItem}>Удалить<br />товар</button>
    </div>
  )
}

export default AdminCatalogItem

