import React, { useState, useEffect } from 'react' ;
import { useDispatch, useSelector } from 'react-redux' ;

import SearchFilter from '../../components/SearchFilter' ;
import MainPart from '../../components/MainPart' ;
const Blog = ()=> {
    return(
        <div className='text-[black] text-[40px] h-screen'>
            <SearchFilter />
            <MainPart />
        </div>
    )
}

export default Blog ;