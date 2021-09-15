'use strict';

const bookModel = require('../models/books.model');


const getBooks = (request, response) => {

    bookModel.find({ email: request.query.email },(error, booksData) => {
    response.json(booksData)
  });
}; 

// const createBooks = (request, response) => {

//   bookModel.find((error, booksData) => {
//   response.json(booksData)
// });

// };



//======================================================= Create request:
const createBooks = (request, response) => {
  const {title, description ,status,email} = request.body;
  const newBook = new bookModel({
    title, description, status ,email
  });
  newBook.save();
  response.json(newBook);
}
//======================================================= Delete request:
const deleteBook = (request, response) => {
  console.log(request.params);
  const bookId = request.params.book_id;
  bookModel.deleteOne({ _id: bookId }, (error, deletedData) => {
    response.json(deletedData);
  });
}
//======================================================= Update request:

const updateBook = (request, response) => {

  const {title, description ,status,email} = request.body;
  const bookId = request.params.book_id;
  
  bookModel.findByIdAndUpdate(
    { _id: bookId }, 
    { title, description, status,email }, 
    { new: true }, 
    (error, updatedBookData) => {

    response.json(updatedBookData);
  });
}


//========================================== Controller Exports:
module.exports = {
    getBooks,
    createBooks,
    deleteBook,
    updateBook,
}