import banner from '@/images/banner.png'
import Image from 'next/image';
import './home.css'
import Brands from '@/components/brands';
import NewArrivals from '@/components/new-arrivals';
import TopSelling from '@/components/top-selling';
import BrowseByDress from '@/components/browse-by-dress';

export default function Home() {
  return (
    <div>
      <div className='banner'>
          <Image fill src={banner} alt='image' />
      </div>

      {/* banner texts */}
      <div className='banner-text'>
        <div className='banner-content-1'>
            <h1 className='text-6xl font-bold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <h6 className='text-sm mt-4'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h6>
            <button className='shop-now-btn'>Shop Now</button>
        </div>
        <div className='flex banner-content-2'>
            <div className='banner-data border-slate-300 border-r'>
              <h2>200+</h2>
              <h6>International Brands</h6>
            </div>
            <div className='banner-data border-slate-300 border-r pl-6'>
              <h2>2,000+</h2>
              <h6>High-Quality Products</h6>
            </div>
            <div className='banner-data pl-6'>
              <h2>30,000+</h2>
              <h6>Happy Customers</h6>
            </div>
        </div>
      </div>
      {/* brands  */}
      <Brands /> 

      {/* new arrivals  */}
      <NewArrivals />

      {/* new arrivals  */}
      <TopSelling />

      {/* browse by dress  */}
      <BrowseByDress />
    </div>
  );
}
