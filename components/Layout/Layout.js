import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Layout = ({children})=> {
    return(
        <div className='mt-[50px] ml-[40px]'>
            {children}
        </div>
    )
}

export default Layout ;