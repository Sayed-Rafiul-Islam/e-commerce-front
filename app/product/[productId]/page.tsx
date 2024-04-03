// import getProduct from "@/actions/get-product";
// import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
// import ProductList from "@/components/product-list";
// import Info from "@/components/ui/info";

import tshirtBlack from '@/images/products/t shirt black.jpg'
import tshirtOrange from '@/images/products/t shirt orange.jpg'
import jins from '@/images/products/jins blue.jpg'
import Info from "@/components/info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import './product.css'
import Reviews from "@/components/reviews";
import SuggestedItems from "@/components/suggested-items";

interface ProductPageProps {
    params : {
        productId : string
    }
}

const ProductPage : React.FC<ProductPageProps> = async ({params}) => {
    const product = 
        {
            id : 1,
            label : "T-Shirt Black",
            images : [tshirtBlack,tshirtOrange,jins],
            rating : 4.5,
            price : 200,
            discount : 10,
            description : 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.'
        }

    return ( 
        <div className="product pt-20 py-10 lg:px-8">
                <div className="product-section-1">
                        <div className="gallery">
                            <Gallery images={product.images} /> 
                        </div>
                        <div className="info">
                            <Info data={product} />
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
                            4.
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