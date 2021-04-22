import React from 'react';
import OptionMenu from './OptionMenu';
import PropTypes from 'prop-types';
import '../App.css';

const Book = ({ data, shelfChange }) => {
	const getAuthorsName = () => {
		return (
      data.authors&&data.authors.length>0?
			<div className="book-authors">
      {data.authors.map((author)=>
				<div key={author}>{author}</div>
      )}
			</div>:<div></div>
		);
	};
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{ width: 128, height: 193, backgroundImage: data.imageLinks&&data.imageLinks.thumbnail?`url(${data.imageLinks.thumbnail})`:`` }}
				></div>
				<OptionMenu shelfChange={shelfChange} book={data} currentShelf={data.shelf} />
			</div>
			<div className="book-title">{data.title}</div>
      {getAuthorsName()}
		</div>
	);
};
Book.protoTypes = {
	data: PropTypes.array,
	shelfChange: PropTypes.func,
};
export default Book;
