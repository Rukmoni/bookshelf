import React from 'react'
import { Route } from 'react-router-dom'
import BookShelfPage from './pages/BookShelfPage';
import SearchPage from './pages/SearchPage';
//import { getAll} from './BooksAPI';
 import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
   booksData:[]
  }
  
   componentDidMount(){
   
    this.fetch_All_Books();
    
    
    
  }
  fetch_All_Books=()=>{
    BooksAPI.getAll().then((books)=>{
      console.log("books",books);
      this.setState(() => ({booksData: books}))

    })
     /*  let bookShelfs=books.map(book=>{
        let bookObj={}
        bookObj["title"]=book.title;
        bookObj["id"]=book.id;
        bookObj["authors"]=book.authors?book.authors:"Author Info missing";
        bookObj["imageLinks"]=book.imageLinks?book.imageLinks.thumbnail:"";
        bookObj["shelf"]=book.shelf;
        return bookObj;
      })
      console.log("bookShelfs",bookShelfs);
      this.setState(() => ({booksData: bookShelfs}))
    }) */

  }
shelfChange=(book,shelf)=>{
  book.shelf=shelf;
  BooksAPI.update(book,shelf).then(()=>{
    this.fetch_All_Books()
  })
  
}
  render() {

    return (
      <div className="app">
       <Route exact path='/' render={(props) => (
          <BookShelfPage {...props}
            booksData={this.state.booksData}
            shelfChange={this.shelfChange}
          />
        )}/>
       <Route exact path='/search' render={()=>(
         <SearchPage booksData={this.state.booksData} shelfChange={this.shelfChange}/>
       )}/>
      </div>
    )
  }
}

export default BooksApp
