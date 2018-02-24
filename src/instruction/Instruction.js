import React, { Component } from 'react';
import './Instruction.css';

class Instruction extends Component {
  render() {
    return (
      <div className="instruction">
        <p className={this.props.error ? 'red' : ''}>{this.props.message}</p>
      </div>
    );
  }
}

export default Instruction;