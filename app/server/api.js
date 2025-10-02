import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';
import serviceAccount from './firebase/webprog-1004-0-firebase-adminsdk-fbsvc-9e28e40abd.json' with { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

async function fetchDataDB(){
    const results = [];
    const booksRef = db.collection('Books');
    const booksSnap = await booksRef.get();
    booksSnap.forEach(doc => {
        results.push({
            id: doc.id,
            ...doc.data()
        });
    })
    return results;
}

app.get('/api/getBooksFromDB', (req, res) => {
    res.set('Content-Type', 'application/json');
    fetchDataDB().then(jsonData => {
        res.json(jsonData);
    }).catch(error => {
        res.json(error);
    });
});

// http://localhost:3000/api/insert --> Add a new book
async function addBook(newBook) {
  const newBookRef = db.collection('..................').doc();
  const docRef = db.collection('..................').doc(newBookRef.id);
  await docRef.set(newBook);
  console.log('Book added!');
}
 
//app.post('/api/insert', (req, res) => {
  //try {
    //const { .................., .................. } = req.body;
    //console.log(.................., ..................);
    //const newBook = { id: String(books.length + 1), .................., .................. };
    // books.push(newBook);
    //addBook(newBook);
    //res.status(201).json({ success: true, message: 'Form submitted successfully.' });
  //} catch (err) {
    //res.status(500).json({ success: false, message: err.message });
  //}
//})


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
 
