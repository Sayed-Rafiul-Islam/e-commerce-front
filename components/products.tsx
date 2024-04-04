"use client"

import './products.css'
import tshirtBlack from '@/images/products/t shirt black.jpg'
import tshirtOrange from '@/images/products/t shirt orange.jpg'
import jins from '@/images/products/jins blue.jpg'
import shirt from '@/images/products/shirt check.jpg'
import ProductCard from './product-card'
import { useEffect, useState } from 'react'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"


const Products = () => {

    const products = [
        {
            id : 1,
            label : "T-Shirt Black",
            image : tshirtBlack,
            rating : 4.5,
            price : 200,
            discount : 10
        },
        {
            id : 2,
            label : "Check Shirt",
            image : shirt,
            rating : 2.5,
            price : 1200,
            discount : 75
        },
        {
            id : 3,
            label : "Jins Blue",
            image : jins,
            rating : 4,
            price : 1200,
            discount : 0
        },
        {
            id : 4,
            label : "T-Shirt Orange",
            image : tshirtOrange,
            rating : 3.5,
            price : 258,
            discount : 30
        },
        {
            id : 5,
            label : "T-Shirt Black",
            image : tshirtBlack,
            rating : 4.5,
            price : 200,
            discount : 10
        },
        {
            id : 6,
            label : "Check Shirt",
            image : shirt,
            rating : 2.5,
            price : 1200,
            discount : 75
        },
        {
            id : 7,
            label : "Jins Blue",
            image : jins,
            rating : 4,
            price : 1200,
            discount : 0
        },
        {
            id : 8,
            label : "T-Shirt Orange",
            image : tshirtOrange,
            rating : 3.5,
            price : 258,
            discount : 30
        },
        {
            id : 9,
            label : "T-Shirt Black",
            image : tshirtBlack,
            rating : 4.5,
            price : 200,
            discount : 10
        },
        {
            id : 10,
            label : "Check Shirt",
            image : shirt,
            rating : 2.5,
            price : 1200,
            discount : 75
        },
        {
            id : 11,
            label : "Jins Blue",
            image : jins,
            rating : 4,
            price : 1200,
            discount : 0
        },
        {
            id : 12,
            label : "T-Shirt Orange",
            image : tshirtOrange,
            rating : 3.5,
            price : 258,
            discount : 30
        },
        {
            id : 13,
            label : "T-Shirt Black",
            image : tshirtBlack,
            rating : 4.5,
            price : 200,
            discount : 10
        },
        {
            id : 14,
            label : "Check Shirt",
            image : shirt,
            rating : 2.5,
            price : 1200,
            discount : 75
        },
        {
            id : 15,
            label : "Jins Blue",
            image : jins,
            rating : 4,
            price : 1200,
            discount : 0
        },
        {
            id : 16,
            label : "T-Shirt Orange",
            image : tshirtOrange,
            rating : 3.5,
            price : 258,
            discount : 30
        },
    ]



    const pageCount = Math.ceil(products.length / 10)
    // const pageCount = 10
    const pages = Array.from({length: pageCount}, (v, i) => i) 
    const [page, setPage] = useState(0) 
    const [items,setItems] = useState([])

    console.log(page,pages.length -1)
    useEffect(()=>{
        const show : any = products.slice(page*10,(page + 1)*10)
        setItems(show)
    },[page])
    


    return ( 
        <div className='products'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 w-full'>
                {
                    items.map(({id,label,image,rating,price,discount}) => 
                    <ProductCard
                        key={id}
                        id={id}
                        label={label}
                        image={image}
                        rating={rating}
                        price={price}
                        discount={discount}
                     />
                    )
                }
            </div>
            <Pagination>
                        <PaginationContent>
                            <PaginationItem className={page < 1 ? 'cursor-not-allowed text-gray-400' : ''}>
                                <PaginationPrevious className={page < 1 ? 'pointer-events-none cursor-not-allowed' : ''} onClick={()=>{setPage(page - 1)}} href="#" />
                            </PaginationItem>
                            {
                                pages.map((i,index) =>
                                    <PaginationLink 
                                    onClick={()=>{setPage(index)}}
                                        className={page === index ? `border border-gray-500` : ``}
                                        href="#"
                                        >
                                            {index + 1}
                                    </PaginationLink>
                                )
                            }
                            {/* <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem> */}
                            <PaginationItem className={page === pages.length - 1 ? 'cursor-not-allowed text-gray-400' : ''}>
                                <PaginationNext className={page === pages.length - 1 ? 'pointer-events-none cursor-not-allowed' : ''} onClick={()=>{setPage(page + 1)}} href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
        </div>
     );
}
 
export default Products;