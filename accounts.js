function findAccountById(accounts, id) {//finds account by id
  return accounts.find(account => account.id === id);
}//end function

function sortAccountsByLastName(accounts) {//sorts objects by last name
  return accounts.sort((name1,name2) => name1.name.last < name2.name.last ? -1 : 1);
}//end function

function getTotalNumberOfBorrows(accounts, books) {//finds total number of borrows
let total = 0;
  for(let id in books){
    const borrowList = books[id].borrows.filter((book) => book.id === accounts.id);
    total += borrowList.length;
  }
  return total;
}//end function

function getBooksPossessedByAccount(account,books, authors) {//returns book object with matching author that's possed by an account
  let bookArr = [];
    for(let i = 0; i < books.length; i++){
    let book = books[i];
      if(book.borrows[0].id === account.id && !book.borrows[0].returned){
         for(let j = 0; j < authors.length; j++){
           if(book.authorId === authors[j].id){
             book.author = authors[j];
             bookArr.push(book);
           }//end if
         }//end loop
      }//end if
  }//end loop
return bookArr;   
}//end function

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
