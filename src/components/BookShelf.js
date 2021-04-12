import React from 'react';
import Book from './Book';
import '../App.css';

const BookShelf = ({ shelf, booksList,onUpdate }) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf.title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{booksList &&
						booksList.map((book) => {
							return (
								<li>
									<Book data={book} onUpdate={onUpdate}/>
								</li>
							);
						})}
				</ol>
			</div>
		</div>
	);
};

export default BookShelf;
