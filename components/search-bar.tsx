"use client"
import { Search } from 'lucide-react';
import './search-bar.css'
import { useState } from 'react';

const SearchBar = () => {
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchBtn, setSearchBtn] = useState(false)
    return ( 
        <div className='w-full'>
            <input 
            onFocus={()=>setSearchBtn(true)}
                className="w-full search-bar" 
                type="text" 
                placeholder="search for products..."
            />
            <div className={`${searchBtn ? 'search-bar-on' : 'search-bar-off'}`}>
                    <button onClick={()=>{setSearchBtn(false)}} className='cancel-btn'>Cancel</button>
                    <button className='search-btn'>Search</button>
            </div>
            <button 
                onClick={()=>{setSearchOpen(true)}}
                className='search-icon'
            >
                <Search/>
            </button>
            <div className={`${searchOpen ? 'sm-search-bar-on' : "sm-search-bar-off"}`}>
                <input 
                    className="mx-auto" 
                    type="text" 
                    placeholder="search for products..."
                />
                <div className=''>
                    <button className='search-btn'>Search</button>
                    <button className='cancel-btn' onClick={()=>{setSearchOpen(false)}}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
 
export default SearchBar;