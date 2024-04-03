import './browse-by-dress.css'

import casual from '@/images/styles/casual.png'
import formal from '@/images/styles/formal.png'
import party from '@/images/styles/party.png'
import gym from '@/images/styles/gym.png'
import Image from 'next/image'

const BrowseByDress = () => {
    return ( 
        <div className='bg-gray-300 mx-auto w-5/6 rounded-3xl'>
            <h1 className='text-center text-5xl font-bold pt-16'>Browse By Dress Style</h1>
            <div className='md:px-20 px-8 md:py-10 py-5'>
                <div className='flex flex-col md:flex-row gap-4 my-4'>
                    <div className="casual-image">
                        <Image src={casual} alt="image" fill/>
                    </div>
                    <div className="formal-image">
                        <Image src={formal} alt="image" fill/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 my-4'>
                    <div className="party-image">
                        <Image src={party} alt="image" fill/>
                    </div>
                    <div className="gym-image">
                        <Image src={gym} alt="image" fill/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BrowseByDress;