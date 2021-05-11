function findAuthorById(authors, id) { //returns author with matching ID
  return authors.find(authors => authors.id === id);
}//end function

function findBookById(books, id) { //returns book with matching ID
  return books.find(books => books.id === id);
}// end function

function partitionBooksByBorrowedStatus(books) {// returns nested array of books that are borrowed/returned
  let result = [];
  let borrowed = [];
  let returned = [];
    for(let i = 0; i < books.length; i++) {
      if(books[i].borrows[0].returned === false) {
        borrowed.push(books[i]);
      } else {
        returned.push(books[i]);
      }//end condition(s)
    }//end loop
    return result = [borrowed, returned];
}//end function

function getBorrowersForBook(book, accounts) { //returns an array of the books borrows transactions with all information from each account object.
  let result = book.borrows.map((borrows) => {
    let account = accounts.find((account) => account.id === borrows.id);
      return {...borrows, ...account} ;
  });
  return result.slice(0,10);
}//end function

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
