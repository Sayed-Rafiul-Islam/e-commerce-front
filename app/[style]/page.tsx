"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

  import './style.css'
import { ChevronRightIcon, SlidersVertical } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
  

interface StylePageProps {
    params : {
        style : string
    }
}

const StylePage : React.FC<StylePageProps> = ({params}) => {

    const capitalize = (s : string) => s[0].toUpperCase() + s.slice(1);
    const style = capitalize(params.style)
    const genre = [
        {
            id : 1,
            label : "T-shirts",
            value : "tshirts"
        },
        {
            id : 2,
            label : "Shorts",
            value : "shorts"
        },
        {
            id : 3,
            label : "Shirts",
            value : "shirts"
        },
        {
            id : 4,
            label : "Hoodey",
            value : "hoodey"
        },
        {
            id : 5,
            label : "Jeans",
            value : "jeans"
        },
    ]

    const [priceMin, setPriceMin] = useState(2500)
    const [priceMax, setPriceMax] = useState(7500)
    let [priceMinPar, setPriceMinPar] = useState<number>(25)
    let [priceMaxPar, setPriceMaxPar] = useState<number>(25)
    const priceGap = 1000
    
    
    const minBar = (e : number) => {

        if (priceMax > e + priceGap) {
            if ( priceMax - e < priceGap ) {
                setPriceMin(priceMax - priceGap)
                setPriceMinPar(Math.floor(((priceMax - priceGap) / 10000) * 100))
            } else {
                setPriceMin(e)
                setPriceMinPar(Math.floor((e / 10000) * 100))
            }
        } 

    }
const maxBar = (e : number) => {
        if ( e - priceMin < priceGap ) {
            setPriceMax(priceMin + priceGap)
            setPriceMaxPar(100 - Math.floor(((priceMin + priceGap) / 10000) * 100))
        } else {
            setPriceMax(e)
            setPriceMaxPar(100 - Math.floor((e / 10000) * 100))
        }
}


    // let maxPrice = 100 - priceMax/100
    // let minPrice = priceMin/100
    



    return ( 
        <div className="w-11/12 p-20 h-[1000px] mx-auto">
            <Breadcrumb className="ml-6 mb-6 text-gray-400">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <   BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbPage>{style}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
        <section className="flex">
            {/* filters  */}
            <div className="filters px-5">
                <div className="filters-heading flex justify-between py-4 items-center border-b border-gray-200">
                    <h3 className="text-black text-lg font-bold">Filters</h3>
                    <SlidersVertical size={20} className="text-gray-500"/>
                </div>

                <div className="genre border-b border-gray-200 pb-3">
                    {
                        genre.map(({id,label,value}) =>
                            <Link href='#' 
                            className="flex justify-between items-center my-2.5 text-gray-500 hover:text-gray-800 transition-all" 
                            key={id}
                            >
                                <h4 className="text-sm" >{label}</h4>
                                <ChevronRightIcon size={18}/>
                            </Link>
                        )
                    }
                </div>

                <div className="py-5 border-b border-gray-200">
                    <div className="wrapper">
                        <header>
                            <h2 className="text-black text-lg font-bold">Price</h2>
                        </header>
                        
                        <div className="slider ">
                            <div className={`progress`} style={{left : `${priceMinPar}%`, right : `${priceMaxPar}%`}}/>
                            <h3 className="absolute text-xs font-semibold top-3" style={{left : `${priceMinPar - priceMinPar/7}%`}} >{priceMin} $</h3>
                            <h3 className="absolute text-xs font-semibold -top-5" style={{right : `${priceMaxPar - priceMaxPar/7}%`}} >{priceMax} $</h3>
                        </div>

                        <div className="range-input">
                            <input onChange={(e)=>minBar(parseInt(e.target.value))} type="range" className="range-min" min='0' max='10000' value={priceMin}/>
                            <input onChange={(e)=>maxBar(parseInt(e.target.value))} type="range" className="range-max" min='1' max='10000' value={priceMax}/>
                        </div>
                       
                    </div>
                </div>
            </div>

            {/* Style  */}
            <div className="style">

            </div>
        </section>
        </div>
     );
}
 
export default StylePage;