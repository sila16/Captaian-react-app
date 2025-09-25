import express from 'express';
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

let books = [ 
    {id: 1, title: 'Web Tecnology', author: 'captain 1 '},
    {id: 2, title: 'web Programming', author: 'captain 2 '},
];
 
app.get('/', (req, res) => {
res.send('Hello World!')
})

app.post('/api/insert', (req, res) => {
    const {title, author} = req.body;
    const newbook = {id: String(books.length + 1), title, author};
    books.push(newbook);
    res.status(201).json(newbook);
})

app.get('/api/getbooks', (req, res) => {
    res.json(books);
})
app.get('/api/getbooks/:book_id', (req, res) => {
    let bid =Number( req.params.book_id);
    const result = books.filter(
    bObj =>{ 
        return bObj.id === bid
}
    );
    console.log(result[0]);
    res.json(result[0]);
})

app.post('/api/update', (req, res) => {
    const {id, in_title, in_author} = req.body;
    console.log('Data:', id, in_title, in_author);
    const updatedBooks = books.map(
        bObj => {
            if(bObj.id === id){
                return {...bObj, title : in_title, author: in_author};
            }
            return bObj;
        }
    );
    console.log('Updated', updatedBooks);
    res.json({message: 'update...'});
})

app.listen(port, () => {
console.log( `Example app listening on port ${port}`)
})
 
