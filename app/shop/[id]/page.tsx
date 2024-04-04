"use client"
import Gallery from "@/components/gallery";


import tshirtBlack from '@/images/products/t shirt black.jpg'
import tshirtOrange from '@/images/products/t shirt orange.jpg'
import jeans from '@/images/products/jins blue.jpg'
import shirt from '@/images/products/shirt check.jpg'
import Info from "@/components/info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import './product.css'
import Reviews from "@/components/reviews";
import SuggestedItems from "@/components/suggested-items";

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
  

  

interface ProductPageProps {
    params : {
        id : string
    }
}

const ProductPage : React.FC<ProductPageProps> = async ({params}) => {

    const products = [
        {
            id : 1,
            label : "T-Shirt Black",
            category : ['T Shirt','tshirt'],
            images : [tshirtBlack,tshirtBlack,tshirtBlack],
            rating : 4,
            price : 200,
            discount : 10,
            description : 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'
        },
        {
            id : 2,
            label : "Check Shirt",
            category : ['Shirt','shirt'],
            images : [shirt,shirt,shirt],
            rating : 4.5,
            price : 1200,
            discount : 15,
            description : 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'
        },
        {
            id : 3,
            label : "Jeans",
            category : ['Pants','pants'],
            images : [jeans,jeans,jeans],
            rating : 2,
            price : 800,
            discount : 0,
            description : 'This graphic pants which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'
        },
        {
            id : 4,
            label : "T-Shirt Orange",
            category : ['T Shirt','tshirt'],
            images : [tshirtOrange,tshirtOrange,tshirtOrange],
            rating : 3.5,
            price : 250,
            discount : 10,
            description : 'This graphic shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'
        },
    ]

    const product = products.filter((item) => item.id === parseInt(params.id))
       

    return ( 
        <div className="product pt-20 py-10 lg:px-8">
                <Breadcrumb className="ml-6 mb-6 text-gray-400">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <   BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/${product[0].category[1]}`}>{product[0].category[0]}</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbPage>{product[0].label}</BreadcrumbPage>
                        </BreadcrumbItem>

                    </BreadcrumbList>
                </Breadcrumb>

                <div className="product-section-1">
                        <div className="gallery">
                            <Gallery images={product[0].images} /> 
                        </div>
                        <div className="info">
                            <Info data={product[0]} />
                        </div>
                </div>
                <div className="product-section-2">
                    <Tabs defaultValue="details" className="w-full">
                        <TabsList className="grid grid-cols-3">
                            <TabsTrigger value="details">Product Details</TabsTrigger>
                            <TabsTrigger value="reviews">Reviews</TabsTrigger>
                            <TabsTrigger value="faq">FAQ</TabsTrigger>
                        </TabsList>
                        <TabsContent value="details">

                        </TabsContent>
                        <TabsContent value="reviews">
                            <Reviews />
                        </TabsContent>
                        <TabsContent value="faq">
                        <Accordion type="single" collapsible>
                            <AccordionItem className="lg:mx-20 md:mx-15 mx-5" value="item-1">
                                <AccordionTrigger className="hover:no-underline">How can I place an order on your website?</AccordionTrigger>
                                <AccordionContent >
                                YTo place an order, simply browse through our products, select the items you wish to purchase, and add them to your cart. Once you're ready to checkout, follow the prompts to enter your shipping and payment information.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem className="lg:mx-20 md:mx-15 mx-5" value="item-2">
                                <AccordionTrigger className="hover:no-underline">What payment methods do you accept?</AccordionTrigger>
                                <AccordionContent >
                                We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and sometimes alternative payment options like Apple Pay or Google Pay. You'll see all available options during checkout.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem className="lg:mx-20 md:mx-15 mx-5" value="item-3">
                                <AccordionTrigger className="hover:no-underline">What is your shipping policy?</AccordionTrigger>
                                <AccordionContent >
                                Our shipping policy varies depending on your location and the products you're ordering. Typically, we offer standard and expedited shipping options. You can find detailed information about shipping times and costs during the checkout process.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem className="lg:mx-20 md:mx-15 mx-5" value="item-4">
                                <AccordionTrigger className="hover:no-underline">Do you offer international shipping?</AccordionTrigger>
                                <AccordionContent >
                                Yes, we do offer international shipping to select countries. During checkout, you'll be able to see if your country is eligible for shipping and the associated costs.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        </TabsContent>
                    </Tabs>
                </div>

                <div className="product-section-3 mt-10">
                   <h2 className="text-4xl font-bold text-center">You Might Also Like</h2>
                   <SuggestedItems />
                </div>
        </div>
     );
}
 
export default ProductPage;