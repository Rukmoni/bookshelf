import React from 'react';
import {SHELFS} from '../constants'
import '../App.css'

const OptionMenu=({onUpdate,book,currentShelf})=>{
 
  function changeShelf(evt)
  {
    console.log(book)
    onUpdate(book,evt.target.value)
  }
    return(
        <div className="book-shelf-changer">
        <select onChange={changeShelf} >
          <option value="move" disabled>Move to...</option>
          <option value={SHELFS.CURRENTLY_READING_SHELF.key}>Currently Reading</option>
          <option value={SHELFS.WANT_TO_READ_SHELF.key}>Want to Read</option>
          <option value={SHELFS.READ_SHELF.key}>Read</option>
          <option value="none">None</option>
        </select>
      </div>
    

    )
}

export default OptionMenu;