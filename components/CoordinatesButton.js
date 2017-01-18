const React = require('react');

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    this.props.onReceiveCoordinates([event.screenX, event.screenY]);
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Coordinates</button>
      </div>
      );
  }
}

module.exports = CoordinatesButton;