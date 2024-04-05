"use client"
import { Search, SearchIcon, X } from 'lucide-react';
import './search-bar.css'
import { useState } from 'react';

const SearchBar = () => {
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchBtn, setSearchBtn] = useState(false)

    return ( 
        <div className='w-full'>
            <div className='search relative'>
                <input 
                onFocus={()=>setSearchBtn(true)}
                    className="w-full search-bar" 
                    type="text" 
                    placeholder="search for products..."
                />
                <div className={`${searchBtn ? 'search-bar-on' : 'search-bar-off'}`}>
                    <SearchIcon className='text-gray-500 hover:text-black hover:font-bold cursor-pointer transition-all' />
                    <X className='text-gray-500 hover:text-black hover:font-bold cursor-pointer transition-all' onClick={()=>{setSearchBtn(false)}} />
                </div>
            </div>
            <button 
                onClick={()=>{setSearchOpen(true)}}
                className='search-icon'
            >
                <Search/>
            </button>
            <div className={`${searchOpen ? 'sm-search-bar-on' : "sm-search-bar-off"}`}>
                <input 
                    className="pl-4 pr-20 w-full" 
                    type="text" 
                    placeholder="search for products..."
                />
                <div className='sm-search'>
                    <SearchIcon className='text-gray-500 hover:text-black hover:font-bold cursor-pointer transition-all' />
                    <X className='text-gray-500 hover:text-black hover:font-bold cursor-pointer transition-all' onClick={()=>{setSearchOpen(false)}} />
                </div>
            </div>
        </div>
    );
}
 
export default SearchBar;