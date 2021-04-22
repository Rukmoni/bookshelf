import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';
import PropTypes from 'prop-types';
import { SHELFS } from '../constants';
import '../App.css';

const BookShelfPage = ({booksData,shelfChange}) => {

	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<BookShelf shelf={SHELFS.CURRENTLY_READING_SHELF} booksList={booksData} shelfChange={shelfChange}/>
				<BookShelf shelf={SHELFS.WANT_TO_READ_SHELF} booksList={booksData} shelfChange={shelfChange}/>
                <BookShelf shelf={SHELFS.READ_SHELF} booksList={booksData} shelfChange={shelfChange}/>
			</div>
			<div className="open-search">
			<Link to="/search" >
				<button>Add a book</button>
				</Link>
			</div>
		</div>
	);
};
BookShelfPage.protoTypes={
    booksData:PropTypes.array,
    shelfChange:PropTypes.func,
}

export default BookShelfPage;
