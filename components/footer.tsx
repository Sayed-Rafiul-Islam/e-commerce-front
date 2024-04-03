"use clinet"
import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";

import './footer.css'
import Image from "next/image";

import visa from '@/images/cards/visa.png'
import master from '@/images/cards/master.png'
import paypal from '@/images/cards/paypal.png'
import apple from '@/images/cards/apple pay.png'
import google from '@/images/cards/google pay.png'

const Footer = () => {
    return ( 
        <div className="footer bg-gray-300">
            <div className="grid md:grid-cols-5 grid-cols-2 border-b border-gray-400 pb-5 footer-part-1">
                <div className="md:col-span-1 col-span-2 col-type-1">
                    <h2 className="text-3xl font-bold mb-3">SHOP.CO</h2>
                    <p className="text-xs text-gray-600 mb-2 pr-28 md:pr-0">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                    <div className="flex gap-x-2 md:mb-0 mb-6">
                        <div className="link">
                            <Twitter className="icon-1" fill='black' size={20} strokeWidth={0} />
                            <Twitter className="icon-2" fill='white' size={20} strokeWidth={0} />
                        </div>
                        <div className="link">
                            <Facebook className="icon-1" size={20}  fill="black" strokeWidth={0} />
                            <Facebook className="icon-2" size={20}  fill="white" strokeWidth={0} />
                        </div>
                        <div className="link">
                            <Youtube className="stroke-icon-1"  size={20} strokeWidth={2} />
                            <Youtube className="stroke-icon-2"  size={20} strokeWidth={2} />
                        </div>
                        <div className="link">
                            <Github className="icon-1" size={20}  fill="black" strokeWidth={0} />
                            <Github className="icon-2" size={20}  fill="white" strokeWidth={0} />
                        </div> 
                    </div>
                </div>
                <div className="col-type-2">
                    <h4 className="font-bold">COMPANY</h4>
                    <h6 className="text-xs text-gray-600 my-2">About</h6>
                    <h6 className="text-xs text-gray-600 my-2">Features</h6>
                    <h6 className="text-xs text-gray-600 my-2">Works</h6>
                    <h6 className="text-xs text-gray-600 my-2">Carrer</h6>
                </div>
                <div className="col-type-2">
                    <h4 className="font-bold">HELP</h4>
                    <h6 className="text-xs text-gray-600 my-2">Customer Support</h6>
                    <h6 className="text-xs text-gray-600 my-2">Delivary Details</h6>
                    <h6 className="text-xs text-gray-600 my-2">Terms & Services</h6>
                    <h6 className="text-xs text-gray-600 my-2">Privacy Policy</h6>
                </div>
                <div className="col-type-2">
                    <h4 className="font-bold">FAQ</h4>
                    <h6 className="text-xs text-gray-600 my-2">Account</h6>
                    <h6 className="text-xs text-gray-600 my-2">Manage Delivaries</h6>
                    <h6 className="text-xs text-gray-600 my-2">Orders</h6>
                    <h6 className="text-xs text-gray-600 my-2">Payments</h6>
                </div>
                <div className="col-type-2">
                    <h4 className="font-bold">RESOURCES</h4>
                    <h6 className="text-xs text-gray-600 my-2">Free eBooks</h6>
                    <h6 className="text-xs text-gray-600 my-2">Development Tutorials</h6>
                    <h6 className="text-xs text-gray-600 my-2">How to - Blog</h6>
                    <h6 className="text-xs text-gray-600 my-2">Youtube Playlist</h6>
                </div>
            </div>
            <div className="mt-3 flex justify-between items-center footer-part-2">
                <h6 className="text-gray-600">Shop.co © 2000-2023, All Rights Reserved</h6>
                <div className="cards">
                <div className="card">
                    <Image fill src={visa} alt="card" />
                </div>
                <div className="card">
                    <Image fill src={master} alt="card" />
                </div>
                <div className="card">
                    <Image fill src={paypal} alt="card" />
                </div>
                <div className="card">
                    <Image fill src={apple} alt="card" />
                </div>
                <div className="card">
                    <Image fill src={google} alt="card" />
                </div>

            </div>
            </div>
            <div className="footer-part-3">
                <h1 className="text-5xl font-bold text-white">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                <div>
                    <input placeholder="Enter your email address" type="text" />
                    <button>Subscribe to Newsletter</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Footer;
