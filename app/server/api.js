import express from 'express';
const app = express()
const port = 3000

let books = [ 
    {id: '1', title: 'Web Tecnology', author: 'captain 1 '},
    {id: '2', title: 'web Programming', author: 'captain 2 '},
];
 
app.get('/', (req, res) => {
res.send('Hello World!')
})

app.post('/api/book', (req, res) => {
    const {title, author} = req.body;
    const newbook = {id: String(bokks.length + 1), title, author};
    books.push(newbook);
    res.status(201).json(newbook);
})
 
app.listen(port, () => {
console.log( `Example app listening on port ${port}`)
})
 