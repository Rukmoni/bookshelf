import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from '../components/Book';
import { SHELFS } from '../constants';
import '../App.css';

const SearchPage = ({ booksData, shelfChange }) => {
	const [SerachedBooks, setSearchedBooks] = useState([]);
	const [query, setQuery] = useState('');
	const [showSearchErr, setShowSearchErr] = useState(false);
	const history = useHistory();

	const handleChange = (evt) => {
		
		setQuery(evt.target.value);
		
		search_books();
	};
	const validate_BookList = (books) => {
		const updatedList = books.map((book) => {
			let shelf_book = booksData.find((this_book) => this_book.id === book.id);
			if (shelf_book && shelf_book.length > 0) {
				book.shelf = shelf_book[0].shelf;
			} else {
				book.shelf = SHELFS.None.key;
			}
			return book;
		});

		setSearchedBooks(updatedList);
	};

	const search_books = () => {
		if (query.length > 0) {
			BooksAPI.search(query, 15).then((books) => {
				if (books.length > 0) {
					validate_BookList(books);
				} else {
					setSearchedBooks([]);
					setShowSearchErr(true);
				}
			});
		}
	
	};

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<button className="close-search" onClick={() => history.push('/')}>
					Close
				</button>
				<div className="search-books-input-wrapper">
					<input type="text" placeholder="Search by title or author" onChange={handleChange} value={query} />
				</div>
			</div>
			<div className="search-books-results">
				{query.length>0&&SerachedBooks && (
					<div>
						<ol className="books-grid">
							{SerachedBooks.map((book) => {
								return (
									<li key={book.id}>
										<Book data={book} shelfChange={shelfChange} />
									</li>
								);
							})}
						</ol>
					</div>
				)}
				{showSearchErr && <h2>Sorry! No Books Found </h2>}
			</div>
		</div>
	);
};
SearchPage.protoTypes = {
	shelfChange: PropTypes.func,
};

export default SearchPage;
