import React from 'react';

const Book = (props) =>{
  return(
    <div className="book_main">
      <div className="book_left">
        <a className="more_books" href="/books">See more books</a>
        <div className="book_cover">
          <p>{props.book.name}</p>
        </div>
      </div>
      <div className="book_right">
        <div className="book_description">
          <p><span className="bold-text">Title:</span> {props.book.name}</p>
          <p><span className="bold-text">Author:</span> <a href={`/writers/${props.author.id}`}>{props.author.name} {props.author.last_name}</a></p>
          <p><span className="bold-text">Genre:</span> {props.book.genre}</p>
          <p><span className="bold-text">Description:</span> <br/>{props.book.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Book
