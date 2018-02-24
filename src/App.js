import React, { Component } from 'react';
import Loadable from 'react-loading-overlay';

import Instruction from './instruction/Instruction.js';
import UrlForm from './form/Form';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      message: 'Just enter the url of a medium article and we\'ll create a table of contents.',
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(url) {
    console.log(this)

    this.setState({
      loading: true
    })

    if (url === 'http://url.com') {
      this.setState({
        error: true
      })
    }
  }

  render() {
    return (
      <div>
        <Loadable active={this.state.loading} spinner color="#00AB6C" background="white" text='Creating Your Table Of Contents...'>
          <div className="content">
          <h1>Medium TOC</h1>
          <Instruction error={this.state.error} message={this.state.message} />

          <UrlForm handleSubmit={this.handleSubmit} />
        </div>
        </Loadable>

        
      </div>
    );
  }
}

export default App;
