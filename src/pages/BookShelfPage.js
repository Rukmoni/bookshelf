import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BookShelf from '../components/BookShelf';
import { getAll,update } from '../BooksAPI';
import { SHELFS } from '../constants';
import '../App.css';

const BookShelfPage = () => {
	const [shelfReading, setShelfReading] = useState([]);
	const [shelfWantToRead, setShelfWantToRead] = useState([]);
    const [shelfRead, setShelfRead] = useState([]);
    async function fetchBooks() {
        const response = await getAll();
        console.log('response', response);
        const shelf1 = response.filter((book) => book.shelf === SHELFS.CURRENTLY_READING_SHELF.key);
        const shelf2 = response.filter((book) => book.shelf === SHELFS.WANT_TO_READ_SHELF.key);
        const shelf3 = response.filter((book) => book.shelf === SHELFS.READ_SHELF.key);
        setShelfReading(shelf1);
        setShelfWantToRead(shelf2);
        setShelfRead(shelf3);
    }
    async function onUpdateBookShelf(shelf,book){
       
        const response=await update(book,shelf)
        console.log(response);
        if(response) fetchBooks();
    }
	useEffect(() => {
		
		fetchBooks();
	}, []);

	const history = useHistory();
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<BookShelf shelf={SHELFS.CURRENTLY_READING_SHELF} booksList={shelfReading} onUpdate={onUpdateBookShelf}/>
				<BookShelf shelf={SHELFS.WANT_TO_READ_SHELF} booksList={shelfWantToRead} onUpdate={onUpdateBookShelf}/>
                <BookShelf shelf={SHELFS.READ_SHELF} booksList={shelfRead} onUpdate={onUpdateBookShelf}/>
			</div>
			<div className="open-search">
				<button onClick={() => history.push('/search')}>Add a book</button>
			</div>
		</div>
	);
};

export default BookShelfPage;
