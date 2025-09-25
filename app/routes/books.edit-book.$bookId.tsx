import { useState,useEffect} from "react";
import { Link,useParams } from "@remix-run/react";

export default function AddBook() {
    const [InputId, setInputId] = useState(0);
    const [InputTitle, setInputTitle] = useState("");
    const [InputAuthor, setInputAuthoro] = useState("");
    
    const {bookId} = useParams();
    useEffect(() => {
        const fetchData = async () => {  
            try {
                const resBook = await fetch(`http://localhost:3000/api/getbooks/${bookId}`);
                if(resBook.ok){
                    const result = await resBook.json();
                    setInputId(result.id);
                    setInputTitle(result.title);
                    setInputAuthoro(result.author);

                }else{
                    alert('APIs is wrong')
                }
            }catch (error) {
                alert('error fetching data : ' + error);
            }
         }       
         fetchData();  
    },[]);
    const handleSubmit = async (e : any) => {
        e.preventDefault();
    try {
      const resAddBook = await fetch(`http://localhost:3000/api/update`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: InputId, title: InputTitle,  author: InputAuthor }),
        });
        const result = await resAddBook.json();
            alert('add book ID' + result.message);

    }catch (error) {
        alert('error submiting data : ' + error);
}
    };
      return (
        <form onSubmit={handleSubmit}>
            <input type="hidden"value = {InputId}/>
            <label>ชื่อหนังสือ:</label>
            <input type= "text"
            value={InputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            />
                 <label>ชื่อหนังสือ:</label>
            <input type= "text"
            value={InputAuthor}
            onChange={(e) => setInputAuthoro(e.target.value)}
            />
            <button type="submit">add book</button>  
        </form>
    );
}