import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props){
      super(props);
      this.state = {
        rooms: [],
        newRoomName: ""
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

handleSubmit(event){
  event.preventDefault();
  this.roomRef.push({
  name: this.state.newRoomName
});
  console.log("submitted");

}

handleChange(event){
  var newRoomName = event.target.value;
  console.log(newRoomName);
  this.setState({newRoomName: newRoomName})
}



render() {
  return (
    <section className="roomList">
      <h1>Bloc Chat</h1>
        <ul className="side-list"> {
          this.state.rooms.map((room, index) =>
          <li className="rooms" key={index}>{room.name}</li>
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
