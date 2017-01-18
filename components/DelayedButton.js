const React = require('react');

class DelayedButton extends React.Component {
  constructor() {
    super();

    this.clickHandle = this.clickHandle.bind(this);

  }
  clickHandle(event) {
    event.persist();
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }


  render() {
    return(
      <div>
        <button onClick={this.clickHandle}>Delay</button>
      </div>
      );
  }
}

module.exports = DelayedButton;