import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getStoredBooks, getStoredWishlist } from '../../utils/LocalStorage';
import Readbook from '../../Components/readbook/Readbook';
import Toread from '../Toread/Toread';
import Wishlist from '../../Components/Wishlist/Wishlist';
import { FaLocationPin } from 'react-icons/fa6';
import { IoPeople } from 'react-icons/io5';
import { RiPagesLine } from 'react-icons/ri';
const Listedbooks = () => {
    
    const [tab, tabIndex] = useState(1);
    const [taab, taabIndex] = useState(1);
    const [read, setRead] = useState([]);
    const [choice, setChoice] = useState([]);

    const tabpress = (no) => {
        tabIndex(no);
    };

    const taabpress = (no) => {
        taabIndex(no);
    };

    useEffect(() => {
        const storedWishlist = getStoredWishlist();
        setChoice(storedWishlist);
    }, []);

    useEffect(() => {
        const storedBooks = getStoredBooks();
        setRead(storedBooks);
    }, []);

    const changeRating = () => {
        const sortedRead = read.slice().sort((a, b) => b.rating - a.rating);
        const sortedChoice = choice.slice().sort((a, b) => b.rating - a.rating);
        setRead(sortedRead);
        setChoice(sortedChoice);
    };

    const changePages = () => {
        const sortedRead = read.slice().sort((a, b) => b.totalPages - a.totalPages);
        const sortedChoice = choice.slice().sort((a, b) => b.totalPages - a.totalPages);
        setRead(sortedRead);
        setChoice(sortedChoice);
    };

    const changeYear = () => {
        const sortedRead = read.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        const sortedChoice = choice.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setRead(sortedRead);
        setChoice(sortedChoice);
    };
     
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='py-[33px] mt-9 bg-[#1313130D] mx-auto'>
                 <h2 className="text-center text-5xl font-bold">Books</h2>
            </div>
            <div className='max-w-[500px] mx-auto mt-5 text-center'>
            <details className="dropdown">
            <summary className="bg-[#23BE0A] font-bold text-xl text-white rounded-lg px-7 py-4 cursor-pointer">Sort by</summary>
            <ul className="p-2 cursor-pointer shadow menu dropdown-content z-[1] text-[#131313CC] bg-[#1313130D] rounded-box w-52">
               <li onClick={changeRating}>Rating</li>
               <li onClick={changePages}>Number of Pages</li>
               <li onClick={changeYear}>Publisher year</li>
             </ul>
            </details>
            </div>
            <div className='max-w-[500px] mt-5'>
            <div role="tablist" className="tabs tabs-lifted text-[#1313134D] font-medium text-xl">
             <Link to='' onClick={()=>tabpress(1)} className={`tab ${tab === 1?'tab-active':''}`}>Read Books</Link>
             <Link to='' onClick={()=>tabpress(2)} className={`tab ${tab === 2?'tab-active':''}`}>Wishlist books</Link>
</div> 
             
            </div>
            <div className='pb-5'>
            {
                tab === 1?read.map(rea=><div className='flex mt-5 border border-solid border-[#13131326] rounded-2xl p-6 gap-6'>
                <div className='w-[230px] h-[230px]'>
                    <img className='w-full h-full rounded-2xl' src={rea.image} alt="" />
                </div>
                <div className=''>
                    <h2 className='font-bold text-2xl'>{rea.bookName}</h2>
                    <p className='mt-4 text-[#131313CC] font-medium'>by: {rea.author}</p>
                    <p className=' flex items-center justify-center mt-4'><b className='mr-4'>Tag:</b>{rea.tags && rea.tags.map(tag => (
            <button
                key={tag}
                className="mr-4 bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] font-medium text-[16px] rounded-[30px]"
            >
                {tag}
            </button>
        ))}
        <span className='flex justify center items-center text-[#424242] font-medium gap-2'><FaLocationPin />Year of Publishing: {rea.yearOfPublishing}</span>
        </p>
        <div className='flex gap-5 mt-4 text-[#13131399] font-medium'>
            <p className='flex gap-2 justify-center items-center'><IoPeople />Publisher: {rea.publisher}</p>
            <p className='flex gap-2 justify-center items-center'><RiPagesLine />Page: {rea.totalPages}</p>
        </div>
        <button className='mt-4 px-5 py-3 rounded-2xl bg-[#328EFF26] text-[#328EFF] text-[16px] font-medium mr-5'>Category: {rea.category}</button>
        <button className='mt-4 px-5 py-3 rounded-2xl bg-[#FFAC3326] text-[#FFAC33] text-[16px] font-medium mr-5'>Rating: {rea.rating}</button>
        <Link to={`/book-details/${rea.bookId}`}><button className='px-5 py-3 mr-5 rounded-2xl bg-[#23BE0A] text-white text-[16px] font-medium'>View Details</button></Link>
                </div>
            </div>):
                choice.map(rea=><div className='flex mt-5 border border-solid border-[#13131326] rounded-2xl p-6 gap-6'>
                    <div className='w-[230px] h-[230px]'>
                        <img className='w-full h-full rounded-2xl' src={rea.image} alt="" />
                    </div>
                    <div className=''>
                        <h2 className='font-bold text-2xl'>{rea.bookName}</h2>
                        <p className='mt-4 text-[#131313CC] font-medium'>by: {rea.author}</p>
                        <p className=' flex items-center justify-center mt-4'><b className='mr-4'>Tag:</b>{rea.tags && rea.tags.map(tag => (
                <button
                    key={tag}
                    className="mr-4 bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] font-medium text-[16px] rounded-[30px]"
                >
                    {tag}
                </button>
            ))}
            <span className='flex justify center items-center text-[#424242] font-medium gap-2'><FaLocationPin />Year of Publishing: {rea.yearOfPublishing}</span>
            </p>
            <div className='flex gap-5 mt-4 text-[#13131399] font-medium'>
                <p className='flex gap-2 justify-center items-center'><IoPeople />Publisher: {rea.publisher}</p>
                <p className='flex gap-2 justify-center items-center'><RiPagesLine />Page: {rea.totalPages}</p>
            </div>
            <button className='mt-4 px-5 py-3 rounded-2xl bg-[#328EFF26] text-[#328EFF] text-[16px] font-medium mr-5'>Category: {rea.category}</button>
            <button className='mt-4 px-5 py-3 rounded-2xl bg-[#FFAC3326] text-[#FFAC33] text-[16px] font-medium mr-5'>Rating: {rea.rating}</button>
            <Link to={`/book-details/${rea.bookId}`}><button className='px-5 py-3 mr-5 rounded-2xl bg-[#23BE0A] text-white text-[16px] font-medium'>View Details</button></Link>
                    </div>
                </div>)
            }
        </div>
        <div className='pb-5'>
            
        </div>
        </div>
    );
};

export default Listedbooks;