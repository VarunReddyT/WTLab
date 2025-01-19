// 14.
// You are given a collection of books objects in a library. Request the user's library ID and assist them in 
// determining whether the book is available at the library.
// Sample Input 1:
// 5
// Sample Output 1:
// Book with libraryId 5 : 'The Old Man and the Sea' by 'Ernest Hemingway' is available.

let library = [
    {
        title: 'The Great Gatsby',
        author: 'Francis Scott Fitzgerald',
        libraryId: 1
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J. D. Salinger',
        libraryId: 2
    },
    {
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck, Robert DeMott',
        libraryId: 3
    },
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryId: 4
    },
    {
        title: 'The Old Man and the Sea',
        author: 'Ernest Hemingway',
        libraryId: 5
    },
    {
        title: 'Of Mice and Men',
        author: 'John Steinbeck',
        libraryId: 6
    },
    {
        title: 'A Song of Ice and Fire',
        author: 'R. R. Martin',
        libraryId: 7
    }
];

let readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
let libraryId;
readline.question('', function (line) {
    libraryId = parseInt(line);
    solution(libraryId);
    readline.close();
});

function solution(libraryId){
    let book = library.find(book => book.libraryId === libraryId);
    if(book){
        console.log(`Book with libraryId ${libraryId} : '${book.title}' by '${book.author}' is available.`);
    }
    else{
        console.log(`Book with libraryId ${libraryId} is not available.`);
    }
}