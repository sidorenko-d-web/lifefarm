import React, { useState } from 'react'

const CatalogControls = ({ setSort, setFilter }) => {
    const [filterOptions, setFilterOptions] = useState(['Фильтр', 'От головной боли', 'От простуды', 'От насморка']) // если будет время, сделать адеватный фильтр с окном и инпутами

    const [sortOptions, setSortOptions] = useState(['По цене', 'По названию', 'По наличию'])

    const handleFilter = () => {
        setFilterOptions(prev => prev.slice(1).concat(prev[0]))
        switch (filterOptions[1]) {
            case 'От головной боли':
                setFilter('headache'); break;
            case 'От простуды':
                setFilter('cold'); break;
            case 'От насморка':
                setFilter('shuffle'); break;
            default:
                setFilter('n'); break;
        }
    }

    const handleSort = () => {
        setSortOptions(prev => prev.slice(1).concat(prev[0]))
        switch (sortOptions[1]) {
            case 'По цене':
                setSort('cost'); break;
            case 'По названию':
                setSort('title'); break;
            case 'По наличию':
                setSort('avalibility'); break;
        }
    }

    return (
        <div className="w-full md:w-11/12 flex justify-between py-5">
            <button className="text-lg md:text-2xl underline " onClick={handleFilter}>{filterOptions[0]}</button>
            <button className="text-lg md:text-2xl underline " onClick={handleSort}>{sortOptions[0]}</button>
        </div>
    )
}

export default CatalogControls