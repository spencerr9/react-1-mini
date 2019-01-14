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
    const friends = this.state.friends.map((element, index, array) => 
      // console.log(element, index, array) 
    (
      <div key={index}>
        <img width='100px' src={element.picture} alt=""/>
        <span>{element.name}</span>
      </div>
    )
    )
    return (
      <div>
        Picture:<input onChange={e => this.updatePicture(e.target.value)} ></input>   
        Name:<input onChange={e => this.updateName(e.target.value)}></input> 
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
