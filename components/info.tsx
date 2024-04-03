"use client"
import { Product } from '@/types';
import './info.css'
import { Minus, Plus, Star, StarHalf } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface InfoProps {
    data : Product
}

const Info : React.FC<InfoProps> = ({
    data
}) => {
    const colors = ['bg-red-500','bg-blue-500','bg-black']
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
    ]
    const [selectedColor, setSelectedColor] = useState(colors[0])
    const [selectedSize, setSelectedSize] = useState(sizes[0].value)
    const [amount, setAmount] = useState(1)

    const ifHalf = Boolean(Math.floor(data.rating) - data.rating)
    const stars = Array.from({length: Math.floor(data.rating)}, (v, i) => i) 
    const discountPrice = data.price - (data.price*data.discount/100)

    return ( 
        <div className='mt-1'>
                <div className='border-b border-gray-300 pb-5'>
                    <h1 className='text-5xl font-extrabold'>{data.label}</h1>
                    <div className="flex items-center my-2">
                    {
                        stars.map((i) =>
                        <Star size={25} color="#ffbb00" strokeWidth={0.5} fill="#ffbb00" />
                        )
                    }
                    {
                        ifHalf && <StarHalf size={25} color="#ffbb00" strokeWidth={0.5} fill="#ffbb00"/>
                    }
                    <p className="text-lg ml-2">{data.rating}/<span className="text-gray-400">5</span></p>
                </div>
                <div className='my-2'>
                    {
                        data.discount > 0 ?
                        <h3 className="flex text-3xl items-center gap-x-2 my-2"><b>${discountPrice}</b> <del className="text-gray-400">${data.price}</del> 
                        <span className="text-xs text-red-500 bg-red-200 px-1 py-0.5 rounded-md">-{data.discount}%</span>
                        </h3>
                        :
                        <h3>${data.price}</h3>
                    }
                    <p className='text-gray-500'>{data.description}</p>
                </div>

                </div>

                {/* color */}
                <div className='border-b border-gray-300 pb-5'>
                    <h3 className='text-xl text-gray-500 mt-5'>Select Color</h3>
                    <div className='flex gap-4 mt-2'>
                        {
                            colors.map((color,index) =>
                                <div key={index} className={`color ${color === selectedColor && 'selected'}`}>
                                    <div onClick={()=>setSelectedColor(color)} className={`${color} `} />
                                </div>
                            )
                        }
                        
                    </div>
                </div>

                {/* size  */}
                <div className='border-b border-gray-300 pb-5'>
                    <h3 className='text-xl text-gray-500 mt-5'>Choose Size</h3>
                    <div className='flex gap-4 mt-2'>
                        {
                            sizes.map(({id,value,name} : any) =>
                                <div key={id} className={`size ${value === selectedSize && 'selected'}`}>
                                        <h2 onClick={()=>setSelectedSize(value)}>{value}</h2>
                                </div>
                            )
                        }
                        
                    </div>
                </div>

                {/* cart  */}
                <div className='flex gap-x-8 mt-5 cart-box'>
                    <div className='amount'>
                        <button onClick={()=>setAmount(amount + 1)}><Plus size={25}/></button>
                        <h4 className='text-lg'>{amount}</h4>
                        <button disabled={amount < 2} className={`${amount < 2 && 'text-gray-400'}`} onClick={()=>setAmount(amount - 1)}>
                            <Minus size={25}/></button>
                    </div>
                    <Button className='cart-btn' variant='default'>Add to Cart</Button>
                </div>
        </div>
     );
}
 
export default Info;