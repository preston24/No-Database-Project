import React, { Component } from 'react';

class TextDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Are these the games you're looking for?
        {this.props.games.map(game => {
          return (
            <div>
              <h4>{game.title} <em>{game.releaseDate}</em></h4> 
              <img src={game.imageUrl} width='300' />
            </div>
          )
        })}
      </div>
    )
  }
}

export default TextDisplay;