import useData from "../../Hooks/useData";
import Singlebook from "../singlebook/Singlebook";


const Books = () => {
    const {book,loading} = useData()
    return (
        <div className="mt-[100px] pb-16">
            <h2 className="text-center text-5xl font-bold">Books</h2>
            <div className='grid grid-cols-3 gap-6 mt-9 '>
           {
            book.map((boo,idx) =><Singlebook key={idx} boo = {boo}></Singlebook>)
           }
        </div>
        </div>
    );
};

export default Books;