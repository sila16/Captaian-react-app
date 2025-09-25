import { c } from "node_modules/vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf";
import { useState } from "react";
export default function AddBook() {
    const [inputTitle, setInputTitle] = useState("");
    const [inputAuthor, setInputAuthoro] = useState("");

    const handleSubmit = async (e : any) => {
    try {
      const resAddBook = await fetch('http://localhost:3000/api/insert',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: inputTitle,  author: inputAuthor }),
        });
        const result = await resAddBook.json();
        if(result.affectedRows){
            alert('add book success' + result.id);

        }
    }catch (error) {
        alert('error submiting data : ' + error);
}
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