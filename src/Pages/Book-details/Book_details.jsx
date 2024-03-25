import React, { useEffect, useState } from 'react';
import useData from '../../Hooks/useData';
import { useParams } from 'react-router-dom';

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
    console.log(single)
    return (
        <div>
            <h2>{single.author}</h2>
           
        </div>
    );
};

export default Book_details;