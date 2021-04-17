import React,{useState} from 'react';
import {PropTypes} from 'prop-types';
import {useHistory } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI';
import Book from '../components/Book'
import '../App.css';


const SearchPage = ({shelfChange}) => {
	const [SerachedBooks,setSearchedBooks]=useState([]);
	const [query,setQuery]=useState('');
	const [filteredBooks,setFilteredBooks]=useState([]);
	const history = useHistory();

	const handleChange=(evt)=>{
		
		setQuery(evt.target.value);
		search_books();

	}
const search_books=()=>{
	if(query.length>0){
		BooksAPI.search(query,15).then((books)=>{
			if(books.length>0){
				console.log(books)
				setSearchedBooks(books)
			}
			else{
				setSearchedBooks([])
			}
		})
	}

}
	return (
		<div className="search-books">
			<div className="search-books-bar">
				<button className="close-search" onClick={() =>history.push('/') }>
					Close
				</button>
				<div className="search-books-input-wrapper">
					{/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
					<input type="text" placeholder="Search by title or author" onChange={handleChange} value={query}/>
				</div>
			</div>
			<div className="search-books-results">
				 <ol className="books-grid" >
				{SerachedBooks &&
					SerachedBooks.map((book) => {
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
SearchPage.protoTypes={
    shelfChange:PropTypes.func,
}

export default SearchPage;
