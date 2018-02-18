import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';  // importing our RoomList Component for use
import MessageList from './components/MessageList.js'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBRTj5agX_RunBVRMMaSPKDM79Picy3Ym4",
    authDomain: "bloc-chat-e5b15.firebaseapp.com",
    databaseURL: "https://bloc-chat-e5b15.firebaseio.com",
    projectId: "bloc-chat-e5b15",
    storageBucket: "bloc-chat-e5b15.appspot.com",
    messagingSenderId: "106062670765"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeRoom: null,
    }
  }
  setActiveRoom(room){
    this.setState({activeRoom: room})
  }

  render() {
    return (
      <div className="App">
        <main>
          <RoomList firebase={firebase} setActiveRoom={this.setActiveRoom.bind(this)}/>
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
        </main>
      </div>
    );
  }
}

export default App;
