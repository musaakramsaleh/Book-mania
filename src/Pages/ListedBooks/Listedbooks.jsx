import React from 'react';
import useData from '../../Hooks/useData';
import Singlebook from '../../Components/singlebook/Singlebook';
const Listedbooks = () => {
    const {book,loading} = useData()
    
    return (
        <div className='grid grid-cols-3 gap-6 mt-9 items-center'>
           {
            book.map(boo =><Singlebook key ={boo.bookId} boo = {boo}></Singlebook>)
           }
        </div>
    );
};

export default Listedbooks;