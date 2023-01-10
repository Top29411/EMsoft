
import React, { useState, useEffect } from 'react' ;
import { useDispatch , useSelector } from "react-redux" ;
import axios from 'axios';
import BlogCard from '../BlogCard' ;
import {changeCurrentPage , setJsonData ,setResult } from '../../redux/modules/mainSlice/action' ;
import {curerntPageSelector , jsonDataSelector , searchFilterResultSelector} from '../../redux/modules/mainSlice/selector' ;

const MainPart =() =>{

    const dispatch = useDispatch() ;
    const currentPage = useSelector(curerntPageSelector) ;
    const JsonData = useSelector(jsonDataSelector) ;
    const searchFilterResult = useSelector(searchFilterResultSelector) ;
    const [blogData , setBlogData] = useState([{}]) ;
    const [totalNum , setTotalNum] = useState() ;
    let isPage ;
    const prev_page =() =>{
        console.log(searchFilterResult , searchFilterResult.length,'result reuslt');
        isPage = (currentPage - 1) <= 0 ? 1 : (currentPage - 1 ) ;
        dispatch(changeCurrentPage(isPage)) ;
    }
    const next_page =() =>{
        isPage = (currentPage + 1) < parseInt((searchFilterResult?.length - 1) / 8 + 1) ? (currentPage + 1 ) : parseInt((searchFilterResult?.length - 1) / 8 + 1) ;
        dispatch(changeCurrentPage(isPage)) ;
    }

    const getInitial = async () => {
        
        // const data = await axios.post('') ;
        
        fetch("./data.json").then(
            function(res){
            return res.json()
          }).then(function(data){
            setBlogData(data['posts']) ;
            dispatch(setJsonData(data)) ;
            dispatch(setResult(data['posts'])) ;
            
            setTotalNum(searchFilterResult?.length) ;
          }).catch(
            function(err){
            //   console.log(err, 'fetching data error') ;
            }
          )
    }

    useEffect(()=>{
        getInitial() ;
    },[]) ;
   

    return (
        <div className=' mt-[30px] '>
            <div className='flex flex-wrap items-start min-h-[800px] '>
                {
                    searchFilterResult.length == 0 &&
                    <div className='flex justify-center items-center w-[100%]  min-h-[800px]'>
                        No Data!
                    </div>
                }
                { searchFilterResult.length > 0 && searchFilterResult != null &&
                    
                    searchFilterResult?.slice(((currentPage-1) * 8),((currentPage-1) * 8 + 8)).map((data , inx)=>(
                        <BlogCard blog_data={data}  key ={inx}/>
                    ))
                }
            </div>
            <div className='flex items-center justify-center'>
                <div className='cursor-pointer border-[1px] border-[black] w-[60px] h-[30px] rounded-[10px] text-[15px] flex items-center justify-center' onClick={prev_page}>
                    Prev
                </div>
                <div className='flex justify-center items-center text-[30px] ml-[35px]'>
                    {currentPage}
                </div>
                <div className='cursor-pointer ml-[40px] border-[1px] border-[black] w-[60px] h-[30px] rounded-[10px] text-[15px] flex items-center justify-center' onClick={next_page}>
                    Next
                </div>
            </div>
        </div>
    )
}

export default MainPart ;