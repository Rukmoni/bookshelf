import React from 'react'
import { Route } from 'react-router-dom'
import BookShelfPage from './pages/BookShelfPage';
import SearchPage from './pages/SearchPage';
import { getAll} from './BooksAPI';
// import * as BooksAPI from './BooksAPI'
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
  async componentDidMount(){
   
      const response = await getAll();
      console.log('response', response);
     
    
    //fetchBooks();
    
    
  }

  render() {
    return (
      <div className="app">
       <Route exact path='/' component={BookShelfPage}/>
       <Route exact path='/search' component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
