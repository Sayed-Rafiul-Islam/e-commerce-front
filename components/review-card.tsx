import Image, { StaticImageData } from "next/image";
import './product-card.css'
import { Check, Ellipsis, Star, StarHalf } from "lucide-react";
import { ReviewCardProps } from "@/types";




const ReviewCard : React.FC<ReviewCardProps> = ({
    id,
    name,
    rating,
    comment,
    date
}) => {
    const ifHalf = Boolean(Math.floor(rating) - rating)
    const stars = Array.from({length: Math.floor(rating)}, (v, i) => i) 
    return ( 
        <div className="border border-gray-300 rounded-lg p-4">
            <div className="flex justify-between mb-2">
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
                <button><Ellipsis size={15} /></button>
            </div>

            <div>
                <h3 className="text-lg font-bold flex items-center gap-x-2">{name} 
                <div className="p-0.5 bg-green-500 w-fit rounded-full"><Check className="text-white" strokeWidth={4} size={10} /></div>
                </h3>
                <p className="text-sm text-gray-500">{comment}</p>
                <h6 className="text-sm text-gray-500 font-bold mt-3">Posted on {date}</h6>
            </div>
            
        </div>
     );
}
 
export default ReviewCard;