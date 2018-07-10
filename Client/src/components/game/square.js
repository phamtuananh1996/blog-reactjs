import React, { Component } from 'react';

class square extends Component {
  render() {
    return (
      <div>
        <button className="square">{this.props.value}</button>
      </div>
    );
  }
}

export default square;