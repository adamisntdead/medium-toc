import React, { Component } from "react";
import "./Instruction.css";

const extraHelp = <a href="https://medium.com/@adamisntdead/how-to-easily-create-a-table-of-contents-for-your-article-507e313b2af3">Get more help.</a>

class Instruction extends Component {
  render() {
    return (
      <div className="instruction">
        <p className={this.props.error ? "red" : ""}>{this.props.message} {(() => this.props.error ? extraHelp : '')()}</p>
      </div>
    );
  }
}

export default Instruction;
