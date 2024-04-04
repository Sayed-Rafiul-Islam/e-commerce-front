"use client"

import Link from "next/link";
import './header.css'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, CircleUserRound, Menu, ShoppingCart, X } from "lucide-react";
import SearchBar from "./search-bar";

const Header = () => {

    const router = useRouter()
    const pathname = usePathname()
    const [ navbar, setNavbar] = useState(false)
    const [sidenav,setSidenav] = useState(false)
    const [shop,setShop] = useState(false)

    useEffect(() => window.addEventListener('scroll', changeBackground), []);
    const changeBackground = () => {
        if (window.scrollY > 100) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }

    }


    const menu = [
        {
            id : 1,
            label : "Shop",
            path : '/shop',
            dropdown : ['t-shirts','shirts','t-shirts','shirts','hoodey']
        },
        {
            id : 2,
            label : "On Sale",
            path : '/onsale',
            dropdown : []
        },
        {
            id : 3,
            label : "New Arrivals",
            path : '/newarrivals',
            dropdown : []
        },
        {
            id : 4,
            label : "Brands",
            path : '/brands',
            dropdown : []
        }
    ]


    
    return ( 
        <div>
            <div className={`navbar-small ${sidenav ? 'drawer-bg' : ''}`}>
            </div>
            <div className={`${sidenav ? 'drawer-on' : 'drawer-off'} navbar-small`}>
                <X className="cross" onClick={()=>setSidenav(false)} />
                <div>
                    <Link className="text-2xl font-bold mr-5" prefetch href='/'>SHOP.CO</Link>
                    <ul>
                                        {
                                            menu.map(({id,label,path,dropdown}) => 
                                                {
                                                    return (
                                                        <>
                                                            {
                                                                dropdown.length === 0 ?
                                                                <Link prefetch 
                                                                    className={`${path === pathname && 'border-b-2 border-primary text-primary font-semibold'} nav-item nav-item-btn relative w-fit`}
                                                                    key={id} href={path}
                                                                >   
                                                                    {label}
                                                                </Link>
                                                                :
                                                                <li className={`${shop ? "shop-space-on" : 'shop-space-off'}`}>
                                                                    <p  
                                                                        className={`flex sm-drop w-fit ${shop && 'text-black font-medium transition-all'}`}
                                                                        key={id} 
                                                                        onClick={()=>{setShop(!shop)}}
                                                                    >   
                                                                        {label}
                                                                        <ChevronDown className={`my-auto ${shop ? 'arrow-up' : 'arrow-down'}`} size={15} />
                                                                    </p>                  
                                                                    <ul className={`${shop ? 'shop-on' : 'shop-off'}`}>
                                                                        {dropdown.map((item : string,index) =>
                                                                        <li><Link key={index} href={`${path}/${item}`}>{item}</Link></li>
                                                                        )}
                                                                    </ul>
                                                                
                                                                </li>
                                                            }
                                                        </>
                                                    )
                                                }
                                            )
                                        }
                    </ul>
                </div>
            </div>
            <div className={`${navbar ? "bg-white shadow-lg rounded-b-2xl" : "bg-transparent"} fixed w-full z-50 transition-all duration-500`}>
                <div className='w-11/12 mx-auto'>
                    <div className="header-container shadow-sm relative py-2">
                        <div className="flex items-center w-1/2 lg:pl-36 relative">
                            <Link className="text-3xl font-bold mr-5" prefetch href='/'>SHOP.CO</Link>
                            <div className="navbar-small relative">
                                <button >
                                    <Menu onClick={()=>setSidenav(true)} />
                                </button>
                            </div>
                           
                            <ul className="gap-8 navbar-large">
                                {
                                    menu.map(({id,label,path,dropdown}) => 
                                        {
                                            return (
                                                <>
                                                    {
                                                        dropdown.length === 0 ?
                                                        <Link prefetch 
                                                            className={`${path === pathname && 'border-b-2 border-primary text-primary font-semibold'} nav-item nav-item-btn relative`}
                                                            key={id} href={path}
                                                        >   
                                                            {label}
                                                        </Link>
                                                        :
                                                        <li className="nav-item">
                                                            <Link 
                                                                prefetch
                                                                className={`${path === pathname && 'border-b-2 relative border-primary text-primary font-semibold'} nav-item nav-item-btn`}
                                                                key={id} 
                                                                href={path}
                                                            >   
                                                                {label}
                                                                <ChevronDown className="my-auto pl-1 arrow" size={15} />
                                                            </Link>                  
                                                            <ul className="dropdown">
                                                                {dropdown.map((item : string,index) =>
                                                                <li><Link key={index} href={`${path}/${item}`}>{item}</Link></li>
                                                                )}
                                                            </ul>
                                                        </li>
                                                    }
                                                </>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                        <div className="flex w-1/2">
                            <div className="flex w-3/4">
                                <SearchBar />
                            </div>
                            <div className="flex w-1/4 secondary-links gap-x-4">
                                <button onClick={()=>router.push('/cart')}><ShoppingCart /></button>
                                <button><CircleUserRound /></button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        
     );
}
 
export default Header;