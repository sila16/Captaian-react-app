import { useState } from "react";
import Foots from "./components/Foots";
import Header from "./components/Header";   

export default function MyTeamProject() {

    const [book, setBook] = useState ({
        bookTitle : "Web programming",
        bookDesc : "พัฒนาด้วย React & Tailwind CSS",
        bookPrice : 199,
        bookAuthor : "Sila Chunyong",
        bookCover : "/images/Projs/book.png"
    });
  const [nextId, setNextId] = useState(0);
  const [books, setBooks] = useState([]);
const myPage = "Captain   - My Project";
const myName = "Sila Chunyong";
const myStudID = "026730491004-0";

const addBook = (e) => {
    setBooks([
     ...books,
     {  
        id: nextId,
        bookTitle: book.bookTitle,
        bookDesc: book.bookDesc,
        bookPrice: book.bookPrice,
        bookAuthor: book.bookAuthor,
        bookCover: book.bookCover
     }
    ]);
    setNextId(nextId + 1);
}

const bookItems = books.map((bObj,index) => 
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={bObj.bookCover}title={bObj.bookTitle}/>
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bObj.bookTitle}{bObj.bookPrice}</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bObj.bookDesc}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">ผู้แต่ง:{bObj.bookAuthor}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </div>
          </div>


);
const Titlechange = (e) => {
    setBook({
        ...book, 
        bookTitle: e.target.value
    });
}
const   Desechange = (e) => {
    setBook({
        ...book, 
        bookDesc: e.target.value
    });
}
const Pricechange = (e) => {
    setBook({
        ...book, 
        bookPrice: e.target.value
    });
}
const  authorchange = (e) => {
    setBook({
        ...book, 
        bookAuthor: e.target.value
    });
}
const coverchange = (e) => {
    setBook({
        ...book, 
        bookCover: e.target.value
    });
}

const resetForm = (e) => {
    setBook({
     bookTitle : "",bookDesc : "",bookPrice : 0.0,bookAuthor : "",bookCover : ""  
    });
}
   return (
        <>
        <Header title={myPage} />
        <p className="text-xl m3 text-center">
          Name: {myName} Student ID: {myStudID}
        </p>
       <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300">
<form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อหนังสือ(Title)</label>
            <input
              value={book.bookTitle}
              onChange={Titlechange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
            <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">คำอธิบาย(Description)</label>
            <input
              value={book.bookDesc}
              onChange={Desechange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
            <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคา(Price)</label>
            <input
              value={book.bookPrice}
              onChange={Pricechange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
            <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รูปภาพ(Cover)</label>
            <input
              value={book.bookCover}
              onChange={coverchange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
            <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ผู้แต่ง(Author)</label>
            <input
              value={book.bookAuthor}
              onChange={authorchange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        <div>
            <div className="mb-5">
            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={addBook}>
                addnewbook</button>
                <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={resetForm} >
                clear </button>
                
            </div>
          </div>
        </form>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="rounded-t-lg" src={book.bookCover}title={book.bookTitle}/>
           </a>
           <div className="p-5">
             <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookTitle}({book.bookPrice})</h5>
             </a>
             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.bookDesc}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">ผู้แต่ง:{book.bookAuthor}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
            </div>
          </div>
          <div className="w-full mx-auto grid overflow-hide">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex">
          {bookItems}
        </div>
      </div>
             
</div>
  
  

        <Foots title= "My footer | Captain"/>
        </>
    );
}

