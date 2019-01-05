import React from 'react';

class Books extends React.Component{
  render(){
    return(
      <div>
        {this.props.alphabet.map((element)=>{
          return <p>{element}</p>
        })}
        {this.props.books.map((element, index)=>{
          let {writers} = this.props
          let authorId = element.writer_id
          let author = ""

          for(let i=0; i<writers.length; i++){
            if(authorId == writers[i].id){
              author  = `${writers[i].name} ${writers[i].last_name}`
            }
          }
          return <p>{element.name} (by {author})</p>
        })}
      </div>
    )
  }
}

export default Books
