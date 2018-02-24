import React, { Component } from "react";
import "./TOC.css";

class TOC extends Component {
  render() {
    return (
      <div className="results">
        <h4>Table of Contents</h4>
        <ul>
          {this.props.results.map((result, i) => {
            return <li key={i}><a href={result.link}>{result.title}</a></li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TOC;
