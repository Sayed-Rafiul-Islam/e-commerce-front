import Image, { StaticImageData } from "next/image";
import './product-card.css'
import { Star, StarHalf } from "lucide-react";

interface ProductCardProps {
    id : number,
    label : string,
    image : StaticImageData,
    rating : number,
    price : number,
    discount : number
}


const ProductCard : React.FC<ProductCardProps> = ({
    id,
    label,
    image,
    rating,
    price,
    discount
}) => {
    const ifHalf = Boolean(Math.floor(rating) - rating)
    const stars = Array.from({length: Math.floor(rating)}, (v, i) => i) 
    const discountPrice = price - (price*discount/100)
    return ( 
        <div className="mx-auto m-4">
            <div className="card-image">
                <Image src={image} alt="image" fill/>
            </div>
            <h4 className="mt-2">{label}</h4>
            <div className="flex items-center">
                {
                    stars.map((i) =>
                    <Star size={15} color="#ffbb00" strokeWidth={0.5} fill="#ffbb00" />
                    )
                }
                {
                    ifHalf && <StarHalf size={15} color="#ffbb00" strokeWidth={0.5} fill="#ffbb00"/>
                }
                <p className="text-sm ml-2">{rating}/<span className="text-gray-400">5</span></p>
            </div>
            {
                discount > 0 ?
                <h3 className="flex items-center gap-x-2"><b>${discountPrice}</b> <del className="text-gray-400">${price}</del> 
                <span className="text-xs text-red-500 bg-red-200 px-1 py-0.5 rounded-md">-{discount}%</span>
                </h3>
                :
                <h3>${price}</h3>
            }
            
        </div>
     );
}
 
export default ProductCard;