import React, { Component } from 'react';
import Loadable from 'react-loading-overlay';

import Instruction from './instruction/Instruction.js';
import Display from './display/Display'
import getHeadings from './api/get-headings';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      message: 'Just enter the url of a medium article and we\'ll create a table of contents.',
      loading: false,
      results: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(url) {
    this.setState({
      loading: true
    })

    getHeadings(url)
      .then(results => {
        if (results.results.length === 0) {
          this.setState({
            message: 'Couldn\'t find headings for this URL. Please check it is correct, and is a Medium article.',
            error: true,
            loading: false
          })
          return;
        }

        this.setState({
          error: false,
          message: 'Done! Just copy and paste whats below into your Medium article!',
          results: results.results,
          loading: false
        })
      })
      .catch(error => {
        this.setState({
          message: 'There was an error fetching content. Make sure the URL is correct and you are connected to the internet.',
          error: true,
          loading: false
        })
      })
  }

  render() {
    return (
      <Loadable active={this.state.loading} spinner color="#00AB6C" background="white" text='Creating Your Table Of Contents...'>
        <div className="content">
          <h1>Medium TOC</h1>
          <Instruction error={this.state.error} message={this.state.message} />
          <Display results={this.state.results} handleSubmit={this.handleSubmit} />
        </div>
      </Loadable>
    );
  }
}

export default App;
