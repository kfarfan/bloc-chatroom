import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props){
      super(props);
      this.state = {
        rooms: []
      };

      this.roomRef = this.props.firebase.database().ref('rooms');
}





componentDidMount() {
  this.roomRef.on('child_added', snapshot => {
  const room = snapshot.val();
  room.key = snapshot.key;
  this.setState({ rooms: this.state.rooms.concat( room ) });
  });
}



render() {
  return (
    <section className="roomList">
    <h1>Bloc Chat</h1>
    <ul>
    {this.state.rooms.map((room, index) =>
      <li key={index}>{room.name}</li>
    )}
    </ul>


      </section>
  );
 }
}



export default RoomList;
