import React from 'react';
import OptionMenu from './OptionMenu';
import '../App.css'

const Book=({data})=>{
  console.log("auther",data.authors[0])
    return(
        <div className="book">
        <div className="book-top">
         {/*  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div> */}
         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${data.imageLinks.thumbnail})` }}></div>
        <OptionMenu/>
        </div>
        <div className="book-title">{data.title}</div>
        <div className="book-authors">{data.authors[0]}</div>
      </div>

    )
}

export default Book;