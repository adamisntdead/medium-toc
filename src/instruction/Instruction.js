import React, { Component } from "react";
import "./Instruction.css";

const extraHelp = <a href="https://medium.com/@adamisntdead/how-to-easily-create-a-table-of-contents-for-your-article-507e313b2af3">Get more help.</a>

const Instruction = ({error, message}) => <div className="instruction">
  <p className={error ? "red" : ""}>{message} {(() => error ? extraHelp : '')()}</p>
  </div>

export default Instruction;
