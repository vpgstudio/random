import React, { Component } from "react";

export class vpguddid extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.match.params.id}</h3>
      </div>
    );
  }
}

export default vpguddid;
