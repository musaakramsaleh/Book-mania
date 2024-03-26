import React, { useContext, useEffect, useState } from 'react';
import { getStoredBooks } from '../../utils/LocalStorage';
import { FaLocationPin } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useRead } from '../../Pages/ListedBooks/Listedbooks';
const Readbook = () => {
    const gift = useContext(useRead)
    console.log(gift.length)
   const [read,setread] = useState([])
   useEffect(()=>{
    const p = getStoredBooks()
    setread(p)
   },[])
    return (
        <div className='pb-5'>
            {
                read.map(rea=><div className='flex mt-5 border border-solid border-[#13131326] rounded-2xl p-6 gap-6'>
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
    );
};

export default Readbook;