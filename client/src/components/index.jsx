import React, { useEffect, useState,  } from 'react'

import { YMaps, Map } from '@pbe/react-yandex-maps';
import Header from './ui-break-points/header.jsx';
import Footer from './ui-break-points/footer.jsx';
import CatalogItem from './catalog-components/catalogItem.jsx';
import AdminCatalogItem from './catalog-components/adminCatalogItem.jsx';
import Pagination from './ui-components/pagination.jsx';
import CatalogControls from './catalog-components/catalogControls.jsx';
import CatalogAddItem from './catalog-components/catalogAddItem.jsx';
import axios from 'axios';

const Index = () => {
    const [isAuth, setIsAuth] = useState(true)
    const [isAdmin, setIsAdmin] = useState(true)

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [items, setItems] = useState([])
    const [sort, setSort] = useState('cost')
    const [filter, setFilter] = useState('n')
    const [search, setSearch] = useState('')

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        setSearch(e.target.searchRequest.value)
    }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/getallitems?`, {
            params:{
                page,
                sort,
                filter,
                search
            }
        }).then(res => {
            setItems(res.data.items)
            if(res.data.count <= 12){
                setTotalPages(1)
            }else{
                setTotalPages(Math.ceil(res.data.count / 12))
            }
        })
    }, [page, sort, filter, search])

    return (
        <div className="bg-c-bg text-c-black-500">
            <Header isAuth={isAuth} isAdmin={isAdmin}/>
            {/* catalog */}
            <main className="flex flex-col items-center w-10/12  md:w-8/12 mx-auto">
                <h1 className="text-5xl 2xl:text-6xl font-bold  py-10">Каталог</h1>
                {/* search */}
                <form className="bg-c-white 2xl:text-2xl flex justify-between w-full md:w-9/12 px-5 py-3 rounded-full shadow-c-sh" onSubmit={e => handleSearchSubmit(e)}>
                    <input className="bg-c-white w-11/12 outline-none"  type="text" name='searchRequest' placeholder="Поиск" id="global-search" />
                    <button className="w-6" type='submit' htmlFor="global-search"><img src="/magnifying-glass-solid.svg" alt="" /></button>
                </form>
                {/* catalog controls */}
                <CatalogControls setSort={setSort} setFilter={setFilter}/>
                {/* items */}
                <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-3 2xl:gap-6 justify-between">
                    {isAdmin && <CatalogAddItem />}
                    {items.map((elem, index) => 
                        isAdmin?
                        <AdminCatalogItem id={elem._id} key={index} title={elem.title} cost={elem.cost} itemImage={elem.itemImage}/>
                        :
                            <CatalogItem id={elem._id} key={index} title={elem.title} cost={elem.cost} itemImage={elem.itemImage}/>
                    )}
                </div>
                {/* pagination */}
                <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
                {/* pick up points */}
                <div className="flex flex-col w-full items-center">
                    <div className="text-4xl font-bold  mb-10 text-center">Наши пункты выдачи</div>
                    <YMaps className="w-[100vw]">
                        <div className="w-[100vw]">
                            <Map className="w-[100vw] h-96 md:h-52" defaultState={{ center: [56.834018, 60.597106], zoom: 15 }} />
                        </div>
                    </YMaps>
                </div>
            </main>

           <Footer/>
        </div>
    )
}

export default Index