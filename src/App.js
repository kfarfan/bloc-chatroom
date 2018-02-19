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
    constructor(props) {
      super(props);
      this.state = {
        activeRoomID: '-L5G7HSty09dMskFDpMA',
        activeRoomName: 'Room 1'
      };
      this.handleClickState = this.handleClickState.bind(this);
    }

    handleClickState(selectionID, selectionName) {
      const newActiveRoomID = selectionID;
      const newActiveRoomName = selectionName
      this.setState({activeRoomID: newActiveRoomID});
      this.setState({activeRoomName: newActiveRoomName});
    }

    render() {
      return (
        <div className="App">
          <RoomList
            firebase={firebase} activeRoomID={this.state.activeRoomID} activeRoomName={this.state.activeRoomName} handleClickState={this.handleClickState}/>
          <MessageList
              firebase={firebase} activeRoomID={this.state.activeRoomID} activeRoomName={this.state.activeRoomName}/>
        </div>
      );
    }
  }

  export default App;
