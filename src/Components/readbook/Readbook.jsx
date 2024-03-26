import React, { useEffect, useState } from 'react';
import { getStoredBooks } from '../../utils/LocalStorage';
import { FaLocationPin } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Readbook = () => {
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
                        <p>by: {rea.author}</p>
                        <p className='mt-4 flex  pb-6 items-center justify-center'><b className='mr-4'>Tag:</b>{rea.tags && rea.tags.map(tag => (
                <button
                    key={tag}
                    className="mr-4 bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] font-medium text-[16px] rounded-[30px]"
                >
                    {tag}
                </button>
            ))}
            <span className='flex justify center items-center'><FaLocationPin />Year of Publishing: {rea.yearOfPublishing}</span>
            </p>
            <div>
                <p><IoPeople />Publisher: {rea.publisher}</p>
                <p><RiPagesLine />Page: {rea.totalPages}</p>
            </div>
            <button>Category: {rea.category}</button>
            <button>Rating: {rea.rating}</button>
            <Link to={`/book-details/${rea.bookId}`}><button>View Details</button></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Readbook;