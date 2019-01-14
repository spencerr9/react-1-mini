import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      friends: [],
      picture: "",
      name: ""
    }
  }

  addPicture(value){
    this.setState({
      picture: value
    })
  }

  addName(value){
    this.setState({
      name: value
    })
  }

  addFriend(){
    const {picture, name} = this.state
    let newFriends = this.state.friends.slice()
    newFriends.push({picture, name})

    this.setState({
      friends: newFriends,
      picture: "",
      name: ""
    })
  }

  render() {
    console.log(this.state)
    const friends = this.state.friends.map((e, i, arr) => (
      <div key={i}>
        <img width='100px' src={e.picture} alt=''></img>
        <span>{e.name}</span>
      </div>
    ))
    return (
      <div>
        Picture: <input onChange={e => this.addPicture(e.target.value)} value={this.state.picture} />
        Name: <input onChange={e => this.addName(e.target.value)} value={this.state.name} />
        <button onClick={() => this.addFriend()} >Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
