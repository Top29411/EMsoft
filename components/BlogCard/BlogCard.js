import React, { useState, useEffect } from 'react' ;
import Image from 'next/image' ;
const BlogCard =({blog_data}) =>{

    useEffect(()=>{
        // console.log(blog_data,'blog_data') ;
    },[]) ;

    return (
        <div className='w-[400px] m-[10px] bg-[white] rounded-[10px]  h-[400px]'>
            <div className='w-[400px] h-[200px] rounded-[10px]'>
                <Image className='rounded-t-[10px]' src={blog_data.imageUrl} width={450} height={200} alt="blogImg" />
            </div>
            <div className='px-[10px]'>
                <div className='text-[20px] text-[blue] py-[10px]'>Article</div>
                <div className='text-[18px] font-bold pb-[15px]'>{blog_data.title}</div>
            </div>
            <div className='text-[15px] px-[10px] text-[gray] pb-[20px]'>
                {blog_data.excerpt}
            </div>
            <div className=''>
            </div>
        </div>
    )
}

export default BlogCard ;