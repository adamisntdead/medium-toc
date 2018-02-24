import React, { Component } from 'react';
import Instruction from './instruction/Instruction.js';
import UrlForm from './form/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      message: 'Just enter the url of a medium article and we\'ll create a table of contents.'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(url) {
    console.log(this)

    if (url === 'http://url.com') {
      this.setState({
        error: true
      })
    }
  }

  render() {
    return (
      <div>
        <div className="content">
          <h1>Medium TOC</h1>
          <Instruction error={this.state.error} message={this.state.message} />

          <UrlForm handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
