import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import TextDisplay from './components/textDisplay';
import PostButton from './components/postButton';
import MoreText from './components/moreText';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      comment: '',
      gameToAdd: {
        title: '',
        imageUrl: '',
        releaseDate: ''
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleInputChange = (e) => {
    let newGame = this.state.gameToAdd;
    newGame[e.target.name] = e.target.value
    this.setState({
      gameToAdd: newGame
    })
    console.log(this.state.gameToAdd)
  }

  submitGameRequest = () => {
    axios.get('http://localhost:3001/games').then((response) => {
      this.setState({
        games: response.data
      }, () => {
        console.log('this is this.state', this.state)
      })
    })
  }

  submitComment = () => {
    var data = {
      games: this.state.games
    }

    axios.post('http://localhost:3001/games', data).then( (response) => {
      console.log('this is the response', response)
    })
  }

  deleteGame = () => {
    axios.delete('http://localhost:3001/games').then( (response) => {
      this.setState({
        games: response.data.splice()
      }, () => {
        console.log(this.state)
      })
    })
  }

  addGame = () => {
    axios.post('http://localhost:3001/games', this.state.gameToAdd).then( (response) => {
      this.setState({
        games: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Game App</h1>
        </header>
        <p className="App-intro">
          The goods!
        </p>
        <div className="game-buttons">
        <button onClick={this.submitGameRequest}>Get Games!</button>
        <button onClick={this.addGame}>Add Game!</button>
        <button onClick={this.deleteGame}>Delete Games!</button>
        </div>
        <div className="input-boxes">
          <input name='title' onChange={this.handleInputChange} placeholder="Title"/>
          <input name="imageUrl" onChange={this.handleInputChange} placeholder="Image"/>
          <input name="releaseDate" onChange={this.handleInputChange} placeholder="Release Date"/>
        </div>
          <div className="Display-text">
            <TextDisplay games={this.state.games}></TextDisplay>
          </div>
        <button className="comment-button" onClick={this.submitComment}>Post Comment!</button>
        <input onChange={this.handleChange} placeholder="Comment Here"/>
        <MoreText />
        <PostButton />
          
      </div>
    );
  }
}

export default App;
