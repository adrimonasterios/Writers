import React from 'react';

const Writer = (props) =>{
  return(
    <div className="writer_main">
      <div className="writer_left">
        <a className="more_writers" href="/writers">See more authors</a>
        <div className="writer_cover">
          <p>Photo</p>
        </div>
        <div className="writer_description">
          <p><span className="bold-text">Name:</span> {props.writer.name} {props.writer.last_name}</p>
          <p><span className="bold-text">Biography:</span> <br/>{props.writer.biography}</p>
        </div>
      </div>
      <div className="writer_right">
        <h2>Books by {props.writer.name} {props.writer.last_name}</h2>
        <div className="author_books_list">
          {props.books.map((element)=>{
            return(
              <div className="author_book">
                <a href={`/books/${element.id}`}>
                  <div className="author_book_cover">
                    <p></p>
                  </div>
                </a>
                <a href={`/books/${element.id}`}>
                  <p>{element.name} ({element.genre})</p>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Writer
