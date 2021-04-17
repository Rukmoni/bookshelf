import React from 'react';
import OptionMenu from './OptionMenu';
import PropTypes from 'prop-types';
import '../App.css'

const Book=({data,shelfChange})=>{
console.log("data",data.authors);
    return(
        <div className="book">
        <div className="book-top">
         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${data.imageLinks.thumbnail})` }}></div>
        <OptionMenu shelfChange={shelfChange} book={data} currentShelf={data.shelf}/>
        </div>
        <div className="book-title">{data.title}</div>
       <div className="book-authors">{data.authors&&data.authors.length>0?data.authors[0]:''}</div> 
      </div>

    )
}
Book.protoTypes={
  data:PropTypes.array,
  shelfChange:PropTypes.func,
}
export default Book;