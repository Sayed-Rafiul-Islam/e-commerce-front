import { Tab } from '@headlessui/react';
import Image, { StaticImageData } from 'next/image';

import './gallery-tab.css'


import { cn } from '@/lib/utils';

interface GalleryTabProps {
    image : StaticImageData
}

const GalleryTab : React.FC<GalleryTabProps> = ({image}) => {
    return ( 
        <Tab className='relative flex cursor-pointer items-center justify-center gallery-tab-image'>
            {({selected}) => (
                <div>
                    <span className='absolute gallery-tab-image inset-0 overflow-hidden'>
                        <Image 
                            fill
                            src={image}
                            alt=''
                            // className='object-cover object-center'
                        />
                    </span>
                    <span className={cn(
                        "absolute inset-0 rounded-md ring-2 ring-offset-2",
                        selected ? 'ring-black' : "ring-transparent"
                    )} />
                </div>
            )}
        </Tab>
     );
}
 
export default GalleryTab;