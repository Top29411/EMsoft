import React, { useState, useEffect } from 'react' ;
import Image from 'next/image' ;
import { LazyLoadImage } from "react-lazy-load-image-component" ;
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'  ;
import 'react-loading-skeleton/dist/skeleton.css' ;
import cn from 'classnames' ;

const shimmer = (w, h) =>`
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#0c1c1e" offset="20%" />
      <stop stop-color="#1e474e" offset="50%" />
      <stop stop-color="#0c1c1e" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#0c1c1e" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str)



const SkellCard = ({blog_data}) => {

    return (
        <div className='w-[400px] m-[10px] bg-[white] rounded-[10px]  h-[400px] hover:-translate-y-2 cursor-pointer'>
            <div className='w-[400px] h-[200px] rounded-[10px] '>
                <Image  
                    className='rounded-t-[10px]' 
                    src={blog_data.imageUrl} 
                    width={400} 
                    height={200} 
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(420, 272))}`}
                    alt="blogImg" />
            </div>
            <div className='px-[10px]'>
                <div className='text-[20px] text-[blue] py-[10px]'>
                    <SkeletonTheme  highlightColor="#ccc">
                        <Skeleton  style={{ width: '50%', borderRadius:'7px', height: 15 }} />
                    </SkeletonTheme>
                </div>
                <div className='text-[18px] font-bold pb-[15px]'>
                    <SkeletonTheme  highlightColor="#ccc">
                        <Skeleton  style={{ width: '70%', borderRadius:'7px', height: 15 }} />
                    </SkeletonTheme>
                </div>
            </div>
            <div className='text-[15px] px-[10px] text-[gray] pb-[20px]'>
                <SkeletonTheme  highlightColor="#ccc">
                    <Skeleton  style={{ width: '90%', borderRadius:'7px', height: 15 }} />
                </SkeletonTheme>
                <SkeletonTheme  highlightColor="#ccc">
                    <Skeleton  style={{ width: '90%', borderRadius:'7px', height: 15 }} />
                </SkeletonTheme>
                <SkeletonTheme  highlightColor="#ccc">
                    <Skeleton  style={{ width: '90%', borderRadius:'7px', height: 15 }} />
                </SkeletonTheme>
            </div>
            <div className=''>
            </div>
        </div>
    )
}

const BlogCard =({blog_data}) =>{

    const [isLoading , setLoading] = useState(false) ;

    useEffect(()=>{
        setTimeout(()=>(setLoading(true)),1500) ;
    },[]) ;

    return (
        !isLoading ?
        <SkellCard blog_data={blog_data}/> 
        :
        <div className='w-[400px] m-[10px] bg-[white] rounded-[10px]  h-[400px] hover:-translate-y-2 cursor-pointer'>
            <div className='w-[400px] h-[200px] rounded-[10px] '>
                <Image  
                    className='rounded-t-[10px]' 
                    src={blog_data.imageUrl} 
                    width={400} 
                    height={200} 
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(420, 272))}`}
                    alt="blogImg" />
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