"use client"

import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import ReviewCard from "./review-card";
import { ReviewCardProps } from "@/types";


const Reviews = () => {

    const sortOptions = ["Latest","All Reviews","Oldest"]
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

    const [sortBy,setSortBy] = useState(sortOptions[0])
    return ( 
        <div className="mt-8 w-11/12 mx-auto flex flex-col">
            <div className="flex justify-between items-center">
                <h3 className="font-bold">All Reviews <span className="text-xs font-medium text-gray-400">({reviews.length})</span></h3>
                <div className="flex gap-x-6">
                    <button><SlidersHorizontal /></button>
                    <button className="hidden items-center md:flex">{sortBy} <ChevronDown size={15}/></button>
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