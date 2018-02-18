import React, { Component } from 'react';

class MessageList extends Component{
  constructor(props){
      super(props);
      this.state = {
        messages: []
      };
}




render() {
  return (
    <section className="roomList">
      <ul>
      <li>{ this.props.activeRoom ? this.props.activeRoom.name : '' }</li>
      </ul>

      </section>
  );
 }
}

export default MessageList;
