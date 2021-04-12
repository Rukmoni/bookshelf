import React from 'react';
import Book from './Book';
import '../App.css'

const BookShelf=({shelf,booksList})=>{
    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book/>
            </li>
            <li>
           <Book/>
            </li>
          </ol>
        </div>
      </div>

    )
}

export default BookShelf;