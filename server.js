'use strict';
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose =require('mongoose');

//=============== books import (require).
const {
   getBooks,
   createBooks,
   deleteBook,
   updateBook,
 } = require('./controllers/book.controller.js');


const seedBook = require('./helper/bookSeed.seed');


//===============================================

//  seedBook();

//===============================================

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const DataBase_NAME = process.env.DataBase_NAME;


mongoose.connect(`${MONGO_URL}/${DataBase_NAME}`);
//===================================
const app = express();
app.use(cors());
app.use(express.json());
//===================================



app.get('/book',getBooks);
app.post('/book', createBooks);
app.delete('/book/:book_id', deleteBook);
app.put(':/book/:id ', updateBook)


// const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {

  response.send('test request received')

})




app.listen(PORT, () => console.log(`listening on ${PORT}`));
