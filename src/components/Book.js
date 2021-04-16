import React from 'react';
import OptionMenu from './OptionMenu';
import PropTypes from 'prop-types';
import '../App.css'

const Book=({data,shelfChange})=>{

    return(
        <div className="book">
        <div className="book-top">
         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${data.imageLinks})` }}></div>
        <OptionMenu shelfChange={shelfChange} book={data} currentShelf={data.shelf}/>
        </div>
        <div className="book-title">{data.title}</div>
        <div className="book-authors">{data.authors[0]}</div>
      </div>

    )
}
Book.protoTypes={
  data:PropTypes.array,
  shelfChange:PropTypes.func,
}
export default Book;