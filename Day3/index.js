const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port,()=>{
    console.log(`server is working at port ${port}`);
});

let books =[{
    id:1,
    name: "Harry Potter",
    isbn: 1212121
},{
    id: 2,
    name: "Percy Jackson",
    isbn: 121223234
},{
    id: 3,
    name: "Mahabharat",
    isbn: 923874923
}];

app.get('/books',(req,res)=>{
    res.json(books);
})
app.post('/books',(req,res)=>{
    const newBook = req.body;
    newBook.id = books.length+1;
    books.push(newBook);
    res.status(201).json(newBook);
});
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;

    const index = books.findIndex(book => book.id === bookId);
    if (index !== -1) {
        books[index] = { id: bookId, ...updatedBook };
        res.json(books[index]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === bookId);

    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        res.json(deletedBook[0]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});
