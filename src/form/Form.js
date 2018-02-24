import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
  }

  render() {
    return (
      <form className="input center" onSubmit={this.handleSubmit}>
        <div className="group center">
          <input
            type="url"
            id="url-input"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Article URL</label>
        </div>
        <button type="submit" className="button center" id="go">Go</button>
      </form>
    );
  }
}

export default Form;
