function getTotalBooksCount(books) {//returns amount of books in array
  let total = 0;
    for(let i = 0; i < books.length; i++){
      total += 1;
    }
    return total;
}

function getTotalAccountsCount(accounts) {//returns amount of accounts
  let total = 0;
    for(let i = 0; i < accounts.length; i++) {
      total += 1;
    }
    return total;
}

function getBooksBorrowedCount(books) {//returns total amount of books that are checked out.
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  return borrowed.length;
}


function helper(books) {//helper function for getMostCommonGenres(returns count value)
  let countObj = {};
   books.forEach(aBook => {
     if (countObj[aBook.genre] != null) {
       countObj[aBook.genre]++;
     } else {
       countObj[aBook.genre] = 1;
     }
   })
  return countObj;
 }

function getMostCommonGenres(books) {//returns object array with top five popular genres
  let countObj = helper(books);
  let countArray = [];
  for (const [key, value] of Object.entries(countObj)) {
    countArray.push({
      'name' : key,
      'count' : value
    }); 
  }
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0, 5);
}//end function


function getMostPopularBooks(books) {//returns object array with top five popular books
  let count = 0;
  let newArr = [];

 for(let i = 0; i < books.length; i++) {
  count = books[i].borrows.length;
  newArr.push({name: books[i].title, count: count});
 }//end loop
return newArr.sort((book1, book2) => book2.count - book1.count).slice(0,5);
}//end function

function getMostPopularAuthors(books, authors) { //returns an array of the top five popular authors
 let count = 0;
 let authorArr = [];

 for(let i = 0; i < authors.length; i++) {
    const matching = books.filter((book) => authors[i].id === book.authorId);
    const borrowCount = matching.reduce((acc, book) => book.borrows.length + acc , 0);
    authorArr.push({name: `${authors[i].name.first} ${authors[i].name.last}`, count: borrowCount});
 }
 return authorArr.sort((author1, author2) => author2.count - author1.count).slice(0,5);
}//end function
  


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
