import React, { Component } from 'react';

class MessageList extends Component{
  constructor(props){
      super(props);
      this.state = {
        messages: []
      };
      this.roomsRef = this.props.firebase.database().ref('rooms');
      this.messagesRef = this.props.firebase.database().ref('messages');
}

componentDidMount() {
  this.messagesRef.on('child_added', snapshot => {
    const message = snapshot.val();
    message.key = snapshot.key;
    this.setState({ messages: this.state.messages.concat( message) });
     });
   }


render() {
  return (
    <section className="roomList">
      <ul>
      <h2>{ this.props.activeRoom ? this.props.activeRoom.name : '' }</h2>
      </ul>
      <ul>{
        this.messagesRef.map((message, index) =>
          <li key={index}>{this.message}</li>
      )}
      </ul>

      </section>
  );
 }
}

export default MessageList;
