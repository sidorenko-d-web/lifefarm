import React, {useEffect, useState} from 'react'

const Pagination = ({page, totalPages, setPage}) => {

    const isInStart = !(page == 1 || page == 2)
    const isInMiddle = page != 1 && page != totalPages
    const isInEnd = !(page == totalPages || page == totalPages - 1)

    const handlePrev = (e) => {
        e.preventDefault()
        setPage((prev) => {
           if(prev > 1) return prev - 1
           return 1
        })
    }
    const handleNext = (e) => {
        e.preventDefault()
        setPage((prev) => {
           if(prev < totalPages) return prev + 1
           return totalPages
        })
        handleChangePage()
    }

    const handleChangePage = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    const pageBtn = (page) => {
        setPage(page)
        handleChangePage()
    }


  return (
    <div className="flex gap-2 my-8">
        <button onClick={e => handlePrev(e)} className='border-c-black-500 border border-solid size-10 flex justify-center items-center rounded-full'>{'<'}</button>
        {totalPages == 1 &&
            <button className={`text-c-white bg-c-black-500 border-c-black-500 border border-solid size-10 flex justify-center items-center rounded-full`}>1</button>
        }
        {totalPages == 3 &&
           <>            
                <button onClick={() => pageBtn(1)}  className={`${page == 1 && 'text-c-white bg-c-black-500'} border-c-black-500 border border-solid size-10 flex justify-center items-center rounded-full`}>1</button>
                <button onClick={() => pageBtn(2)}  className={`${page == 2 && 'text-c-white bg-c-black-500'} border-c-black-500 border border-solid size-10 flex justify-center items-center rounded-full`}>2</button>
                <button onClick={() => pageBtn(3)}  className={`${page == 3 && 'text-c-white bg-c-black-500'} border-c-black-500 border border-solid size-10 flex justify-center items-center rounded-full`}>3</button>
           </>

        }
        {(totalPages == 2 || totalPages > 3) &&
        <>
            <button onClick={() => pageBtn(1)} className={`${page == 1 && 'text-c-white bg-c-black-500'} border-c-black-500 border border-solid size-10 flex justify-center items-center rounded-full`}>1</button>
            {isInStart && <button className="size-10 flex justify-center items-center">...</button>}        
            {isInMiddle && <button className="border-c-black-500 text-c-white bg-c-black-500 border border-solid size-10 flex justify-center items-center rounded-full">{page}</button>}
            {isInEnd && <button className="size-10 flex justify-center items-center">...</button>}
            <button onClick={() => pageBtn(totalPages)} className={`${page == totalPages&&'text-c-white bg-c-black-500'} border-c-black-500 border border-solid size-10 flex justify-center items-center rounded-full`}>{totalPages}</button>
        </>
        }
        <button onClick={e => handleNext(e)} className="border-c-black-500 border border-solid size-10 flex justify-center items-center rounded-full">{'>'}</button>
    </div>
  )
}

export default Pagination