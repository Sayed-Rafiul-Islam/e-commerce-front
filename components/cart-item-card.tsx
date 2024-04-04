"use client"
import Image, { StaticImageData } from "next/image";
import './cart-item-card.css'
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
    id : number,
    label : string,
    image : StaticImageData,
    size : string,
    color : string,
    price : number
}


const CartItemCard : React.FC<ProductCardProps> = ({
    id,
    label,
    image,
    size,
    color,
    price,
}) => {
    const [amount, setAmount] = useState(1)
    return ( 
        <div className="w-11/12 mx-auto border-b border-gray-300 flex justify-between my-4">
            <div className="flex mb-4 gap-2 items-center">
                <div className="item-image">
                    <Image src={image} alt="image" fill/>
                </div>
                <div>
                    <h4 className="font-bold">{label}</h4>
                    <h6 className="text-sm">Size : <span className="text-gray-400">{size}</span></h6>
                    <h6 className="text-sm">Color : <span className="text-gray-400">{color}</span></h6>
                    <h3 className="text-lg font-bold">${price}</h3>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end mb-4">
                <button className="hover:text-red-700 hover:scale-105 transition-all"><Trash2 /></button>
                <div className='amount'>
                        <button onClick={()=>setAmount(amount + 1)}><Plus size={15}/></button>
                        <h4 className='text-xs'>{amount}</h4>
                        <button disabled={amount < 2} className={`${amount < 2 && 'text-gray-400'}`} onClick={()=>setAmount(amount - 1)}>
                        <Minus size={15}/></button>
                </div>
            </div>
        </div>
     );
}
 
export default CartItemCard;