const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const newBook = {
  title: 'The Fellowship of the Ring',
  year: 1954,
  quantity: 5,
  genre: ['High fantasy', 'Adventure'],
  authorName: 'J. R. R. Tolkien',
};

prisma.book
  .create({ data: newBook })
  .then((book) => {
    console.log('Success... a new book was created!!');
    console.log(book);
  })
  .catch((error) => {
    console.log('Something went wrong...');
    console.log(error);
  });

module.exports = prisma;
