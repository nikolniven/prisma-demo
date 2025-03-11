const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// const createAuthorAndBook = async () => {
//   try {
//     // First create the author
//     const author = await prisma.author.create({
//       data: {
//         firstName: 'J. R. R.',
//         lastName: 'Tolkien',
//         bio: 'English writer and philologist',
//       },
//     });

//     // Then create the book with the author's ID
//     const book = await prisma.book.create({
//       data: {
//         title: 'The Fellowship of the Ring',
//         year: 1954,
//         quantity: 5,
//         genre: ['High fantasy', 'Adventure'],
//         authorId: author.id, // Connect to the author using their ID
//       },
//     });

//     console.log('Success! Created:', book);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// createAuthorAndBook();

module.exports = prisma;
