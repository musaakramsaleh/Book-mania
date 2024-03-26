import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
 
const Listedbooks = () => {
    const [tab, tabIndex] = useState(1)
    const tabpress = (no) =>{
         tabIndex(no)
    }
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='py-[33px] mt-9 bg-[#1313130D] mx-auto'>
                 <h2 className="text-center text-5xl font-bold">Books</h2>
            </div>
            <div className='max-w-[500px] mx-auto mt-5 text-center'>
            <details className="dropdown">
            <summary className="bg-[#23BE0A] font-bold text-xl text-white rounded-lg px-7 py-4 cursor-pointer">Sort by</summary>
            <ul className="p-2 cursor-pointer shadow menu dropdown-content z-[1] text-[#131313CC] bg-[#1313130D] rounded-box w-52">
               <li>Rating</li>
               <li>Number of Pages</li>
               <li>Publisher year</li>
             </ul>
            </details>
            </div>
            <div className='max-w-[500px] mt-5'>
            <div role="tablist" className="tabs tabs-lifted text-[#1313134D] font-medium text-xl">
             <Link to='' onClick={()=>tabpress(1)} className={`tab ${tab === 1?'tab-active':''}`}>Read Books</Link>
             <Link to='wishlist' onClick={()=>tabpress(2)} className={`tab ${tab === 2?'tab-active':''}`}>Wishlist books</Link>
</div> 
             
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Listedbooks;