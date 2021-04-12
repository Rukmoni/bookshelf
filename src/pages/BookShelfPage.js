import React from 'react';
import {useHistory } from 'react-router-dom'
import BookShelf from '../components/BookShelf'
import '../App.css';

const BookShelfPage = () => {
    const history = useHistory();
	return (
		         
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              
            <BookShelf/>
            <BookShelf/>
                        
               </div>
          <div className="open-search">
              <button onClick={() => history.push('/search')}>Add a book</button> 
           
            </div> 
            
          </div>
    )
};

export default BookShelfPage;
