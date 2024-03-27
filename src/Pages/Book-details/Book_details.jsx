import React, { useEffect, useState } from 'react';
import useData from '../../Hooks/useData';
import { useParams } from 'react-router-dom';
import { saveToWishlist, savebook } from '../../utils/LocalStorage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book_details = () => {
    const [single,setsingle] = useState({})
    const {id} = useParams()
    const {book,loading} = useData()
    useEffect(()=>{
            const foundBook = book.find(item => item.bookId === id);
            if (foundBook) {
                setsingle(foundBook);
            }
        
    },[book,id])
    console.log()
    const handleRead = ()=>{
        savebook(single)
    }
    const handlewish =()=>{
        saveToWishlist(single)
    }
    return (
        <div className='flex md:flex-row flex-col md:mx-0 mx-2 gap-12 justify-start items-start mt-9 pb-3'>
            <div className='h-[711px] flex-1'>
                <img src={single.image} className='h-full' alt="" />
            </div>
           <div className='flex-1'>
            <h2 className='font-bold text-[40px] text-black'>{single.bookName}</h2>
            <p className='text-xl font-medium text-[#131313CC] mt-4 border-b border-solid border-[#13131326] pb-6'>{single.author}</p>
            <p className='text-xl font-medium text-[#131313CC] mt-4 border-b border-solid border-[#13131326] pb-6'>{single.category}</p>
            <p className='mt-5 text-[#131313CC]'><b className='text-black'>Review:</b> {single.review}</p>
            <p className='mt-4 border-b border-solid border-[#13131326] pb-6'><b className='mr-4'>Tag:</b>{single.tags && single.tags.map(tag => (
                <button
                    key={tag}
                    className="mr-4 bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] font-medium text-[16px] rounded-[30px]"
                >
                    {tag}
                </button>
            ))}
            </p>
            <div className='flex gap-[65px]'>
            <div className='text-[#131313CC] text-[16px] font-medium'>
            <p className='mt-3'>Number of pages:</p>
            <p className='mt-3'>Publisher:</p>
            <p className='mt-3'>Year of publishing:</p>
            <p className='mt-3'>Rating:</p>
            </div>
            <div className='font-bold'>
            <p className='mt-3'>{single.totalPages}</p>
            <p className='mt-3'>{single.publisher}</p>
            <p className='mt-3'>{single.yearOfPublishing}</p>
            <p className='mt-3'>{single.rating}</p>
            </div>
            </div>
            <button onClick={()=>handleRead()} className='mt-4 px-7 py-[18px] border border-solid border-[#131313CC] font-semibold text-[18px] text-black hover:text-white transition-[1000ms] rounded-2xl hover:bg-[#50B1C9]  mr-5'>Read</button>
            <button onClick={()=>handlewish()} className='mt-4 px-7 py-[18px] border border-solid border-[#131313CC] font-semibold text-[18px] text-black hover:text-white transition-[1000ms] rounded-2xl hover:bg-[#50B1C9] '>Wishlist</button>
            <ToastContainer />
           </div>
           
        </div>
        
    );
};

export default Book_details;