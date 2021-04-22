import React, { useState, useEffect } from 'react';
import { SHELFS } from '../constants';
import PropTypes from 'prop-types';
import '../App.css';

const OptionMenu = ({ shelfChange, book, currentShelf }) => {
	const [selectedShelf, setSelectedShelf] = useState(currentShelf);

	useEffect(() => {
    console.log("currentShelf",currentShelf);
		if (typeof(currentShelf) != "undefined") {
      
      setSelectedShelf(currentShelf);
    }else
    {
      console.log("Shelf");
      setSelectedShelf(SHELFS.None);
    }
	}, []);
	function changeShelf(evt) {
    evt.preventDefault();
    setSelectedShelf(evt.target.value)
		shelfChange(book, evt.target.value);
	}
	return (
		<div className="book-shelf-changer">
			<select onChange={(e) => changeShelf(e)} value={selectedShelf}>
				<option value={SHELFS.CURRENTLY_READING_SHELF.key}>Currently Reading</option>
				<option value={SHELFS.WANT_TO_READ_SHELF.key}>Want to Read</option>
				<option value={SHELFS.READ_SHELF.key}>Read</option>
				<option value={SHELFS.None}>None</option>
			</select>
		</div>
	);
};
OptionMenu.protoTypes = {
	data: PropTypes.array,
	shelfChange: PropTypes.func,
	currentShelf: PropTypes.string,
};
export default OptionMenu;
