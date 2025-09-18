import { useState } from "react";
export default function AddBook() {
    const [inputTitle, setInputTitle] = useState("");
    const [inputAuthor, setInputAuthoro] = useState("");

    const handleSubmit = (e) => {
       alert(`Title: ${inputTitle}, Author: ${inputAuthor}`);
       e.preventDefault();
    };
      return (
        <form onSubmit={handleSubmit}>
            <label>ชื่อหนังสือ:</label>
            <input type= "text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            />
                 <label>ชื่อหนังสือ:</label>
            <input type= "text"
            value={inputAuthor}
            onChange={(e) => setInputAuthoro(e.target.value)}
            />
            <button type="submit">add book</button>  
        </form>
    );
}