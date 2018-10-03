// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  receiveCoordinates = (event) => {
    this.props.onReceiveCoordinates(
      [event.pageX, event.pageY]
    )
  }

  render() {
    return (
      <button onClick={this.receiveCoordinates} />
    )
  }
}

export default CoordinatesButton;
