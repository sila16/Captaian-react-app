import { Link } from "@remix-run/react";

export default function BooksHome() {

    return (
        <p className="m-5 p-3 text center text-xxl">
           <Link to="/books/home" className="bg-green-100 p-2">Home</Link> 
           <Link to="/books/add-book" className="bg-blue-100 p-2">Add Book</Link>
        </p>     
            
        
    );
}