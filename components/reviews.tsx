"use client"

import {  SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import ReviewCard from "./review-card";
import { ReviewCardProps } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";


const Reviews = () => {

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

    const selects = [
        {
            id : 1,
            label : "All Reviews",
            value : "all"
        },
        {
            id : 2,
            label : "Latest",
            value : "latest"
        },
        {
            id : 3,
            label : "Oldest",
            value : "oldest"
        }
    ]
    // const [sortBy,setSortBy] = useState(sortOptions[0])
    return ( 
        <div className="mt-8 w-11/12 mx-auto flex flex-col">
            <div className="flex justify-between md:items-center">
                <h3 className="font-bold">All Reviews <span className="text-xs font-medium text-gray-400">({reviews.length})</span></h3>
                <div className="flex md:flex-row flex-col items-center gap-6">
                    <div className="flex items-center gap-2">
                        <button><SlidersHorizontal /></button>
                        {/* <button className="hidden items-center md:flex">{sortBy} <ChevronDown size={15}/></button> */}
                        <Select>
                            <SelectTrigger className="w-32 h-7 border-none text-xs">
                                <SelectValue placeholder={selects[0].label} />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    selects.map(({id,label,value}) =>
                                    <SelectItem key={id} className="h-7 text-xs" value={value}>{label}</SelectItem>
                                    )
                                }
                            </SelectContent>
                        </Select>
                    </div>
                    <Button size='sm'>Write a Review</Button>
                </div>
            </div>

            <div className="reviews grid md:grid-cols-2 gap-5 mt-8">
                {
                    reviews.map(({id,name,rating,comment,date} : ReviewCardProps)=>
                        <ReviewCard
                            id={id}
                            name={name}
                            rating={rating}
                            comment={comment}
                            date={date}

                        />
                    )
                }
            </div>
            <Button variant='ghost' className="w-1/2 mx-auto mt-5">Load More</Button>
        </div>
     );
}
 
export default Reviews;