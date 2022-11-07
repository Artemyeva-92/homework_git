import React, { Component } from "react";

export default class List extends Component {
  render() {
    return Array.isArray(this.props.list) && this.props.list.length ? (
      <div className="tables">
        <ul>
          {this.props.list.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        {this.props.actions.map((item, index) => (
          <button key={index} onClick={item.action}>
            {item.text}
          </button>
        ))}
      </div>
    ) : null;
  }
}
