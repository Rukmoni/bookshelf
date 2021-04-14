import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import '../App.css';

const BookShelf = ({ shelf, booksList,shelfChange }) => {
  const thisShelfBooks=booksList.filter(book=>book.shelf===shelf.key);
 
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf.title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{thisShelfBooks &&
						thisShelfBooks.map((book) => {
							return (
								<li key={book.id}>
									<Book data={book} shelfChange={shelfChange}/>
								</li>
							);
						})}
				</ol>
			</div>
		</div>
	);
};
BookShelf.protoTypes={
  shelf:PropTypes.object,
  booksList:PropTypes.array,
  shelfChange:PropTypes.func,
}
export default BookShelf;
