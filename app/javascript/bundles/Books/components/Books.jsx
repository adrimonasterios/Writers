import React from 'react';

class Books extends React.Component{
  state={
    letter: 'A'
  }

  render(){
    return(
      <div className="books_component">
        <div className="alphabet">
          {this.props.alphabet.map((element)=>{
            return <p className="letter" onClick={(ev)=>{this.setState({letter: element})}}>{element}</p>
          })}
        </div>
        <div className="book_list">
          {this.props.books.map((element, index)=>{
            let {writers} = this.props
            let authorId = element.writer_id
            let author = ""

            for(let i=0; i<writers.length; i++){
              if(authorId == writers[i].id){
                author  = `${writers[i].name} ${writers[i].last_name}`
              }
            }
            if(this.state.letter == element.name[0]){
              return (
                <div className="book_author">
                  <a href={`/books/${element.id}`}>
                    <div className="one_book">
                      <p>{element.name}</p>
                    </div>
                  </a>
                  <a href={`writers/${authorId}`}>
                    <p>by: {author}</p>
                  </a>
                </div>
            )}
          })}
        </div>
      </div>
    )
  }
}

export default Books
