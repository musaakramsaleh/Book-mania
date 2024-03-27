import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-[#1313130D] flex md:flex-row flex-col justify-between items-center px-[120px] py-[80px] mt-[48px]'>
            <div className='max-w-[500px] '>
                <h1 className='font-bold md:text-left text-center text-[56px] text-black'>Books to freshen up your bookshelf</h1>
                <Link to='/listedbooks'><button className='px-[28px] md:ml-0 ml-10 py-[18px] bg-[#23BE0A]  font-bold text-xl text-white rounded-lg mt-[48px]'>View the list</button></Link>
            </div>
            <div className='md:w-[700px] w-[400px]'>
                <img src="./banner-img.png" className='w-[full]' alt="" />
            </div>
        </div>
    );
};

export default Banner;