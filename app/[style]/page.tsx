"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

  import './style.css'
import { ChevronRightIcon, SlidersVertical } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
  

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
    const styles = [
        {
            id : 1,
            label : "Casual",
            value : "casual"
        },
        {
            id : 2,
            label : "Formal",
            value : "formal"
        },
        {
            id : 3,
            label : "Party",
            value : "party"
        },
        {
            id : 4,
            label : "Gym",
            value : "gym"
        }
    ]

    const [priceMin, setPriceMin] = useState(2500)
    const [priceMax, setPriceMax] = useState(7500)
    let [priceMinPar, setPriceMinPar] = useState<number>(25)
    let [priceMaxPar, setPriceMaxPar] = useState<number>(25)
    const priceGap = 1000

    const colors = ['bg-red-500','bg-blue-500','bg-black','bg-purple-500','bg-white',"bg-yellow-500","bg-orange-500","bg-green-500"]
    const sizes = [
        {
            id : 1,
            label : 'Small',
            value : 'S'
        },
        {
            id : 2,
            label : 'Medium',
            value : 'M'
        },
        {
            id : 3,
            label : 'Large',
            value : 'L'
        },
        {
            id : 4,
            label : 'Extra Large',
            value : 'XL'
        },
        {
            id : 5,
            label : 'Extra Extra Large',
            value : '2XL'
        },
        {
            id : 6,
            label : 'Extra Extra Extra Large',
            value : '3XL'
        },
    ]
    const [selectedColor, setSelectedColor] = useState(colors[0])
    const [selectedSize, setSelectedSize] = useState(sizes[0].value)
    
    
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

                <div className="">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="price-range">
                            <AccordionTrigger className="text-black text-lg font-bold hover:no-underline">Price</AccordionTrigger>
                            <AccordionContent>
                            <div className="wrapper mt-5 mb-8">
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
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="colors">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="colors">
                            <AccordionTrigger className="text-black text-lg font-bold hover:no-underline">Colors</AccordionTrigger>
                            <AccordionContent>
                                <div className='grid grid-cols-4 gap-4 mt-2'>
                                    {
                                        colors.map((color,index) =>
                                            <div key={index} className={`color ${color === selectedColor && 'selected'}`}>
                                                <div onClick={()=>setSelectedColor(color)} className={`${color} `} />
                                            </div>
                                        )
                                    }
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="sizes">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="sizes">
                            <AccordionTrigger className="text-black text-lg font-bold hover:no-underline">Sizes</AccordionTrigger>
                            <AccordionContent>
                                <div className='grid grid-cols-3 gap-4 mt-2'>
                                    {
                                        sizes.map(({id,value,name} : any) =>
                                            <div key={id} className={`size ${value === selectedSize && 'selected'}`}>
                                                    <h2 onClick={()=>setSelectedSize(value)}>{value}</h2>
                                            </div>
                                        )
                                    }
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="dress-style">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="dress-style">
                            <AccordionTrigger className="text-black text-lg font-bold hover:no-underline">Dress Style</AccordionTrigger>
                            <AccordionContent>
                                    {
                                        styles.map(({id,label,value}) =>
                                            <Link href='#' 
                                            className="flex justify-between items-center my-2.5 text-gray-500 hover:text-gray-800 transition-all" 
                                            key={id}
                                            >
                                                <h4 className="text-sm" >{label}</h4>
                                                <ChevronRightIcon size={18}/>
                                            </Link>
                                        )
                                    }
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <Button className="w-full rounded-3xl mt-5">Apply Filters</Button>
            </div>

            {/* Style  */}
            <div className="style">

            </div>
        </section>
        </div>
     );
}
 
export default StylePage;