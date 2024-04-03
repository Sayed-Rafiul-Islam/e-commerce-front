import './top-selling.css'
import tshirtBlack from '@/images/products/t shirt black.jpg'
import tshirtOrange from '@/images/products/t shirt orange.jpg'
import jins from '@/images/products/jins blue.jpg'
import shirt from '@/images/products/shirt check.jpg'
import ProductCard from './product-card'


const TopSelling = () => {

    const products = [
        {
            id : 1,
            label : "T-Shirt Black",
            image : tshirtBlack,
            rating : 4.5,
            price : 200,
            discount : 10
        },
        {
            id : 2,
            label : "Check Shirt",
            image : shirt,
            rating : 2.5,
            price : 1200,
            discount : 75
        },
        {
            id : 3,
            label : "Jins Blue",
            image : jins,
            rating : 4,
            price : 1200,
            discount : 0
        },
        {
            id : 4,
            label : "T-Shirt Orange",
            image : tshirtOrange,
            rating : 3.5,
            price : 258,
            discount : 30
        },
    ]
    return ( 
        <div className='top-selling'>
            <h1 className='text-5xl font-bold text-center'>Top Selling</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 mt-10 w-11/12 mx-auto'>
                {
                    products.map(({id,label,image,rating,price,discount}) => 
                    <ProductCard
                        key={id}
                        id={id}
                        label={label}
                        image={image}
                        rating={rating}
                        price={price}
                        discount={discount}
                     />
                    )
                }
            </div>
            <div className='w-full'>
            <button className='view-all mx-auto'>View All</button>
            </div>
        </div>
     );
}
 
export default TopSelling;