import React from 'react';

class Writers extends React.Component{
  state={
    letter: 'A'
  }

  render(){
    return(
      <div className="writers_component">
        <div className="alphabet">
          {this.props.alphabet.map((element)=>{
            return <p className="letter" onClick={(ev)=>{this.setState({letter: element})}}>{element}</p>
          })}
        </div>
        <div className="writer_list">
          {this.props.writers.map((element, index)=>{
            let {books} = this.props
            let bookCount = 0

            for(let i=0; i<books.length; i++){
              if(books[i].writer_id == element.id){
                bookCount += 1
              }
            }
            if(this.state.letter == element.name[0] && bookCount == 1 ){
              return (
                <a href={`writers/${element.id}`}>
                  <p>{element.name} {element.last_name} ({bookCount} book)</p>
                </a>
            )}else if(this.state.letter == element.name[0] && bookCount > 0 ){
              return (
                <a href={`writers/${element.id}`}>
                  <p>{element.name} {element.last_name} ({bookCount} books)</p>
                </a>
            )}
          })}
        </div>
      </div>
    )
  }
}

export default Writers
