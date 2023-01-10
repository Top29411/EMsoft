
import React, { useState, useEffect } from 'react' ;
import { useDispatch , useSelector } from "react-redux" ;
import BlogCard from '../BlogCard' ;
import {changeCurrentPage} from '../../redux/modules/mainSlice/action' ;
import {curerntPageSelector} from '../../redux/modules/mainSlice/selector' ;

const MainPart =() =>{

    const dispatch = useDispatch() ;
    const currentPage = useSelector(curerntPageSelector) ;
    const [blogData , setBlogData] = useState([{}]) ;
    const [totalNum , setTotalNum] = useState() ;
    let isPage ;
    const prev_page =() =>{
        isPage = (currentPage - 1) <= 0 ? 1 : (currentPage - 1 ) ;
        dispatch(changeCurrentPage(isPage)) ;
        console.log(currentPage) ;
    }
    const next_page =() =>{
        isPage = (currentPage + 1) < parseInt((totalNum - 1) / 6 + 1) ? (currentPage + 1 ) : parseInt((totalNum - 1) / 6 + 1) ;
        dispatch(changeCurrentPage(isPage)) ;
        console.log(currentPage) ;
    }

    useEffect(()=>{
        fetch("./data.json").then(
            function(res){
            return res.json()
          }).then(function(data){
            setBlogData(data) ;
            setTotalNum(data['posts'].length) ;
          }).catch(
            function(err){
              console.log(err, 'fetching data error') ;
            }
          )
    },[]) ;

    return (
        <div className=' mt-[30px] '>
            <div className='flex flex-wrap items-start '>
                {
                    blogData['posts']?.slice(((currentPage-1) * 6),((currentPage-1) * 6 + 6)).map((data , inx)=>(
                        <BlogCard blog_data={data}  key ={inx}/>
                    ))
                }
            </div>
            <div className='flex items-center justify-center'>
                <div className='cursor-pointer border-[1px] border-[black] w-[60px] h-[30px] rounded-[10px] text-[15px] flex items-center justify-center' onClick={prev_page}>
                    Prev
                </div>
                <div className='cursor-pointer ml-[40px] border-[1px] border-[black] w-[60px] h-[30px] rounded-[10px] text-[15px] flex items-center justify-center' onClick={next_page}>
                    Next
                </div>
            </div>
        </div>
    )
}

export default MainPart ;