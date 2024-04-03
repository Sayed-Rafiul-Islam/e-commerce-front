"use client"

import { Tab } from "@headlessui/react";

import GalleryTab from "./gallery-tab";
import Image, { StaticImageData } from "next/image";

import './gallery-tab.css'



interface GalleryProps {
    images : StaticImageData[]
}
const Gallery : React.FC<GalleryProps>= ({
    images
}) => {
    return ( 
        <Tab.Group as="div" className="gallery">
                <Tab.List className='gallery-tab'>
                    {images.map((image,index) => (
                        <GalleryTab key={index} image={image} />
                    ))}
                </Tab.List>
                <Tab.Panels className=''>
                    {images.map((image,index)=>(
                        <Tab.Panel key={index}>
                            <div className="relative aspect-square gallery-image sm:rounded-lg overflow-hidden">
                                <Image 
                                    fill
                                    src={image}
                                    alt="Image"
                                    className="object-cover object-center"
                                />
                            </div>
                        </Tab.Panel>
                    ))}
            </Tab.Panels>
        </Tab.Group>
     );
}
 
export default Gallery;