import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props){
      super(props);
      this.state = {
        rooms: [],
        newRoomName: "",
      };

      this.storeInput = this.storeInput.bind(this);
      this.createRoom = this.createRoom.bind(this);
      this.roomsRef = this.props.firebase.database().ref('rooms');
}





componentDidMount() {
  this.roomRef.on('child_added', snapshot => {
  const room = snapshot.val();
  room.key = snapshot.key;
  this.setState({ rooms: this.state.rooms.concat( room ) });
  });
}

createRoom(event) {
  event.preventDefault();
    name: this.state.newRoomName
});
  this.setState({newRoomName: ""});
}

storeInput(e) {
  const newValue = e.target.value;
  this.setState({newRoomName: newValue});
}

handleClass(num) {
  if (num.key === this.props.activeRoomID) {
    return 'roomName activeRoom'
  } else {
    return 'roomName'
  }
}

handleClick(num) {
  const selectionID = num.key;
  const selectionName = num.name;
  this.props.handleClickState(selectionID, selectionName);
}

render() {
  return (
    <section className="roomList">
      <h1>Bloc Chat</h1>
        <ul className="side-list"> {
          this.state.rooms.map((room, index) =>
          <li className="rooms" onClick={() => {this.props.setActiveRoom(room)}} key={index}>{room.name} </li>
        )}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.newRoomName}></input>
        <button type="submit">New Room</button>
        </form>
      </section>
  );
 }
}



export default RoomList;
