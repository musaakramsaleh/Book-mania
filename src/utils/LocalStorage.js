import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const getStoredBooks = () =>{
    const storedBooks = localStorage.getItem('book')
    if(storedBooks){
        return JSON.parse(storedBooks)
    }
    else{
        return []
    }
}

export const savebook =(book)=>{
    const existBooks = getStoredBooks();
    const exists = existBooks.find(exist=>exist.bookId === book.bookId)
    if(!exists){
        existBooks.push(book)
        localStorage.setItem('book',JSON.stringify(existBooks))
        toast('Book saved successfully!');
    }
    else{
        toast("Already exists")
    }
}

export const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
}


export const saveToWishlist = (book) => {
    let storedWishlist = getStoredWishlist();
    const existsInBooks = getStoredBooks().find((exist) => exist.bookId === book.bookId);
    const existsInWishlist = storedWishlist.find((exist) => exist.bookId === book.bookId);

    if (!existsInBooks && !existsInWishlist) {
        storedWishlist.push(book);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
        toast('Book added to wishlist successfully!');
    }else {
        toast('Book already exists in wishlist! or in read');
    }
}
