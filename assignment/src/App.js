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

  updatePicture(value){
    this.setState({
      picture: value
    })
  }

  updateName(value){
    this.setState({
      name: value
    })
  }

  addFriend(){
    const {friends, picture, name} = this.state
    let newFriends = friends.slice()
    newFriends.push({picture, name})
    
    this.setState({
      friends: newFriends,
      picture: "",
      name: ""
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        Picture:<input onChange={e => this.updatePicture(e.target.value)} ></input>   
        Name:<input onChange={e => this.updateName(e.target.value)}></input> 
        <button>Add Friend</button>
      </div>
    );
  }
}

export default App;
