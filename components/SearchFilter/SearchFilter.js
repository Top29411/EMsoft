import React, { useState, useEffect } from 'react' ;
import axios from 'axios';
import { useDispatch , useSelector } from "react-redux" ;
import {changeCurrentPage , setJsonData ,setResult } from '../../redux/modules/mainSlice/action' ;
import {curerntPageSelector , jsonDataSelector , searchFilterResultSelector} from '../../redux/modules/mainSlice/selector' ;

const SearchFilter =() => {
    
    const dispatch = useDispatch() ;
    const currentPage = useSelector(curerntPageSelector) ;
    const JsonData = useSelector(jsonDataSelector) ;
    const searchFilterResult = useSelector(searchFilterResultSelector) ;

    const [searchVal , setSearchVal] = useState("") ;
    const [filterVal , setFilterVal] = useState() ;

    let result ;

    const search = (val) =>{
        
        // const result = await axios.get('' , title:val) ;

        setSearchVal(val) ;
        result = JsonData['posts'].filter(function (res) {
            return res.title.includes(val)
        })

        result = result.filter(function (res){
            let flg = 0;
            res.categories.forEach(element => {
                if (element == filterVal) flg = 1 ;
            })
            if(flg) return true ;
            return false ;
        });

        dispatch(setResult(result)) ;
        dispatch(changeCurrentPage(1)) ;
    }

    const filter =(val) =>{

        // const result = await axios.get('' , categories:val) ;
        
        setFilterVal(val) ;
        result = JsonData['posts'].filter(function (res){
            let flg = 0;
            res.categories.forEach(element => {
                if (element == val) flg = 1 ;
            })
            if(flg) return true ;
            return false ;
        });
            
        result = result.filter(function (res) {
            return res.title.includes(searchVal)
        })

        dispatch(setResult(result)) ;
        dispatch(changeCurrentPage(1)) ;
        
    }

    const setClick = () =>{
        dispatch(setResult(JsonData['posts'])) ;
        dispatch(changeCurrentPage(1)) ;

    }

    return (
        <div className="flex flex-wrap items-center justify-start ml-20">
            <div className="flex">
                <span className="" >Search</span>
                <input className="pl-[20px] ml-[20px] bg-[white] rounded-[10px]" type="text" name=""  placeholder="search" value={searchVal} onChange={(e)=>search(e.target.value)} />
            </div>
            <div className="flex pl-[20px]">
                <span className="">Filter</span>
                {/* <input className="pl-[20px] ml-[20px]" type="text" name=""  placeholder="filter here" value={filterVal} onChange={(e)=>filter(e.target.value)} /> */}
                <select className='pl-[20px] ml-[20px] rounded-[10px] ' onChange={(e)=>filter(e.target.value)}>
                    <option value="3">Books</option>
                    <option value="4">Accessories</option>
                    <option value="5">Music</option>
                    <option value="6">Toys</option>
                    <option value="7">Audiobooks</option>
                    <option value="8">News</option>
                </select>
            </div>
            <div className='cursor-pointer border-[1px] border-[white] bg-[white] flex justify-center items-center text-[42px] rounded-[15px] w-[150px] h-[60px] ml-[20px]' onClick={setClick}>
                Set
            </div>
        </div>
    )
}

export default SearchFilter ;