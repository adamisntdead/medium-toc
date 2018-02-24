import React, { Component } from 'react';
import TOC from '../toc/TOC';
import UrlForm from '../form/Form';

class Display extends Component {
  render() {

    if (this.props.results.length > 0) {
      return (
        <div>
          <TOC results={this.props.results} /> 
          <br />
          <button href="/" className="button center">Create Another</button>
        </div>
      )

    } else {
      return <UrlForm handleSubmit={this.props.handleSubmit} />
    }
  }
}

export default Display;