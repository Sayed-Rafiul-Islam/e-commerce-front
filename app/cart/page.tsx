import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

import tshirtBlack from '@/images/products/t shirt black.jpg'
import tshirtOrange from '@/images/products/t shirt orange.jpg'
import jins from '@/images/products/jins blue.jpg'
import shirt from '@/images/products/shirt check.jpg'
import CartItemCard from "@/components/cart-item-card"

import './cart-page.css'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CartPage = () => {


    const cartItems = [
        {
            id : 1,
            label : "T-Shirt Black",
            image : tshirtBlack,
            size : "L",
            color : "Black",
            price : 200
        },
        {
            id : 2,
            label : "Check Shirt",
            image : shirt,
            size : "XL",
            color : "Red",
            price : 2400
        },
        {
            id : 3,
            label : "Jins Blue",
            image : jins,
            size : "S",
            color : "Blue",
            price : 200
        },
        {
            id : 4,
            label : "T-Shirt Orange",
            image : tshirtOrange,
            size : "M",
            color : "Orange",
            price : 200
        }
    ]
    return ( 
        <div className="pt-20 w-11/12 mx-auto">
            {/* cart heading  */}
            <div className="mb-5">
                <Breadcrumb className="mb-8 ml-1 text-gray-400">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <   BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Cart</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-5xl font-bold ">YOUR CART</h1>
            </div>

            {/* cart page */}

            <section className="cart-page flex gap-5 w-full">

                {/* cart  */}
                <section className="cart w-1/2 border border-gray-300 rounded-xl">
                    {
                        cartItems.map(({id,label,image,size,color,price}) =>
                            <CartItemCard
                                key={id}
                                id={id}
                                label={label}
                                image={image}
                                size={size}
                                color={color}
                                price={price}
                            />
                        )
                    }
                </section>
                <section className="checkout w-1/2 h-full border border-gray-300 rounded-xl px-6 pt-3 pb-10">
                    <h3 className="text-lg font-bold mb-5">Order Summery</h3>
                    <div>
                        <div className="flex justify-between mb-2">
                            <h4 className="text-gray-500">Subtotal</h4>
                            <h4 className="font-bold">$450</h4>
                        </div>
                        <div className="flex justify-between mb-2">
                            <h4 className="text-gray-500">Discount(-20%)</h4>
                            <h4 className="text-red-500 font-bold">-$90</h4>
                        </div>
                        <div className="flex justify-between pb-2 mb-4 border-b border-gray-300">
                            <h4 className="text-gray-500">Delivary Fee</h4>
                            <h4 className="font-bold">$20</h4>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="">Total</h4>
                            <h4 className="font-bold text-lg">$380</h4>
                        </div>
                    </div>

                    <div className="flex gap-4">
                            <input 
                                className="w-2/3 promo" 
                                type="text" 
                                placeholder="search for products..."
                            />
                            <Button className="w-1/3 rounded-3xl">Apply</Button>
                    </div>

                    <Button className="w-full rounded-3xl flex items-center mt-4">Go To Checkout <ArrowRight className="ml-2" size={15} /></Button>
                </section>
            </section>
            
        </div>
     );
}
 
export default CartPage;


 {/* <div className={`${searchBtn ? 'search-bar-on' : 'search-bar-off'}`}>
                                    <button onClick={()=>{setSearchBtn(false)}} className='cancel-btn'>Cancel</button>
                                    <button className='search-btn'>Search</button>
                            </div> */}
                            {/* <button 
                                onClick={()=>{setSearchOpen(true)}}
                                className='search-icon'
                            >
                                <Search/>
                            </button> */}
                            {/* <div className={`${searchOpen ? 'sm-search-bar-on' : "sm-search-bar-off"}`}>
                                <input 
                                    className="mx-auto" 
                                    type="text" 
                                    placeholder="search for products..."
                                />
                                <div className=''>
                                    <button className='search-btn'>Search</button>
                                    <button className='cancel-btn' onClick={()=>{setSearchOpen(false)}}>Cancel</button>
                                </div>
                            </div> */}