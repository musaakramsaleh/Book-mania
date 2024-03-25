
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
const Singlebook = ({boo}) => {
    const {bookId,image,tags,bookName,author,category,rating} = boo
    return (
        <Link className="mx-auto" to={`/book-details/${bookId}`}>
        <div className="border border-solid border-red-500 rounded-2xl p-6 mx-auto">
            <img className="w-[326px] mx-auto h-[230px] mb-6 rounded-2xl" src={image} alt="" />
            {
                tags.map(tag=><button className="mr-4 bg-[#23BE0A0D] px-4 py-2 text-[#23BE0A] font-medium text-[16px] rounded-[30px]">{tag}</button>)
            }
            <h2 className="font-bold text-2xl mt-6">{bookName}</h2>
            <p className="text-[#131313CC] font-medium text-[16px] mt-4 border-b-2 border-dashed pb-[19px]">By :{author}</p>
            <div className="flex justify-between text-[#131313CC] font-medium text-[16px] mt-4">
                <span className="text-[#131313CC]">{category}</span>
                <span className="flex justify-center items-center text-[#131313CC] ">{rating}<IoMdStar className="ml-2"/></span>
            </div>
        </div>
        </Link>
    );
};

export default Singlebook;