import Image from "next/image";
import './brands.css'
import vercase from '@/images/brands/vercase.png'
import gucci from '@/images/brands/gucci.png'
import prada from '@/images/brands/prada.png'
import zara from '@/images/brands/zara.png'
import calvin from '@/images/brands/kevin.png'

const Brands = () => {
    return ( 
        <div className="brands">
           <div className="brands-line-1">
            <div className='brand'>
                    <Image fill src={vercase} alt='image' />
                </div>
                <div className='brand'>
                    <Image fill src={gucci} alt='image' />
                </div>
                <div className='brand'>
                    <Image fill src={prada} alt='image' />
                </div>
           </div>
            <div className="brands-line-2">
                <div className='brand'>
                    <Image fill src={zara} alt='image' />
                </div>
                <div className='brand'>
                    <Image fill src={calvin} alt='image' />
                </div>
            </div>
        </div>
     );
}
 
export default Brands;