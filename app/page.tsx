import banner from '@/images/banner.png'
import Image from 'next/image';
import './home.css'
import Brands from '@/components/brands';
import NewArrivals from '@/components/new-arrivals';
import TopSelling from '@/components/top-selling';
import BrowseByDress from '@/components/browse-by-dress';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Check, Star, StarHalf } from 'lucide-react';
import { ReviewCardProps } from '@/types';

export default function Home() {
  const reviews = [
    {
        id : 1,
        name : "Samantha D",
        rating : 4.5,
        comment : "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date : "August 14, 2023"
    },
    {
        id : 2,
        name : "Samantha D",
        rating : 4,
        comment : "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date : "August 14, 2023"
    },
    {
        id : 3,
        name : "Samantha D",
        rating : 2.5,
        comment : "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date : "August 14, 2023"
    },
    {
        id : 4,
        name : "Samantha D",
        rating : 3.5,
        comment : "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date : "August 14, 2023"
    },
]
  return (
    <div>
      <div className='banner'>
          <Image fill src={banner} alt='image' />
      </div>

      {/* banner texts */}
      <div className='banner-text'>
        <div className='banner-content-1'>
            <h1 className='text-6xl font-bold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <h6 className='text-sm mt-4'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h6>
            <button className='shop-now-btn'>Shop Now</button>
        </div>
        <div className='flex banner-content-2'>
            <div className='banner-data border-slate-300 border-r'>
              <h2>200+</h2>
              <h6>International Brands</h6>
            </div>
            <div className='banner-data border-slate-300 border-r pl-6'>
              <h2>2,000+</h2>
              <h6>High-Quality Products</h6>
            </div>
            <div className='banner-data pl-6'>
              <h2>30,000+</h2>
              <h6>Happy Customers</h6>
            </div>
        </div>
      </div>
      {/* brands  */}
      <Brands /> 

      {/* new arrivals  */}
      <NewArrivals />

      {/* new arrivals  */}
      <TopSelling />

      {/* browse by dress  */}
      <BrowseByDress />

      {/* Reviews  */}
      <div className='mt-20 w-5/6 mx-auto'>
      <h1 className='text-5xl font-bold mb-10 '>OUR HAPPY CUSTOMERS</h1>
      <Carousel className='w-11/12 mx-auto'>
        <CarouselContent className=''>
        {
                    reviews.map(({id,name,rating,comment} : ReviewCardProps)=>
                        { 
                          const ifHalf = Boolean(Math.floor(rating) - rating)
                          const stars = Array.from({length: Math.floor(rating)}, (v, i) => i)
                          return (
                            <CarouselItem key={id} className='lg:basis-1/3'>
                                  <div className="border border-gray-300 rounded-lg p-4">
                                    <div className="flex mb-2">
                                        <div className="flex items-center">
                                            {
                                                stars.map((i) =>
                                                <Star size={15} color="#ffbb00" strokeWidth={0.5} fill="#ffbb00" />
                                                )
                                            }
                                            {
                                                ifHalf && <StarHalf size={15} color="#ffbb00" strokeWidth={0.5} fill="#ffbb00"/>
                                            }
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold flex items-center gap-x-2">{name} 
                                        <div className="p-0.5 bg-green-500 w-fit rounded-full"><Check className="text-white" strokeWidth={4} size={10} /></div>
                                        </h3>
                                        <p className="text-sm text-gray-500">{comment}</p>
                                    </div>
                                    
                                </div>

                            </CarouselItem>
                          )
                        }
                    )
                }
          

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      </div>
      
    </div>
  );
}
