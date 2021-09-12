'use strict';

const bookModel = require('../models/books.model');



const seedBook = () => {

    const book_num_1 = new bookModel({
        title: 'MongoDB: The Definitive Guide',
        description: 'MongoDB: The Definitive Guide: Powerful and Scalable Data Storage',
        status: "Available",
        email: "aajaber.97@gmail.com",
    });

    book_num_1.save();


    const book_num_2 = new bookModel({
        title: 'Learning React: Functional Web Development with React and Redux',

        description: ` Authors Alex Banks and Eve Porcello show you how to 
        create UIs with this small JavaScript library that can deftly display 
        data changes on large-scale, data-driven websites without page reloads`,

        status: "Available",
        email: "jariryousef@gmail.com",
    });

    book_num_2.save();


    const book_num_3 = new bookModel({
        title: 'Book 3',
        description: 'desc 3',
        status: "Available",
        email: "aajaber.97@gmail.com",
    });

    book_num_3.save();


    console.log("Data seeded! ");
}

module.exports = seedBook;