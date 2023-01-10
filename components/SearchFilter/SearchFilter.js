import React, { useState, useEffect } from 'react' ;


const SearchFilter =() => {

    const [searchVal , setSearchVal] = useState("") ;
    const [filterVal , setFilterVal] = useState("") ;

    const search = (val) =>{
        setSearchVal(val) ;
        console.log(val) ;
    }

    const filter =(val) =>{
        setFilterVal(val) ;
    }

    return (
        <div className="flex flex-wrap items-center justify-start">
            <div className="flex">
                <span className="">Search</span>
                <input className="pl-[20px] ml-[20px]" type="text" name=""  placeholder="search" value={searchVal} onChange={(e)=>search(e.target.value)} />
            </div>
            <div className="flex pl-[20px]">
                <span className="">Filter</span>
                <input className="pl-[20px] ml-[20px]" type="text" name=""  placeholder="filter here" value={filterVal} onChange={(e)=>filter(e.target.value)} />
            </div>
        </div>
    )
}

export default SearchFilter ;