import React, { Component } from "react";

class JRTable extends Component {
  constructor(props, columns) {
    super(props);
    this.columns = columns;
    this.state = { data: {}, errors: {} };
  }

  render() {
    return (
      <table className="justify-content-center">
        {this.renderColumns()}
        {this.renderData()}
      </table>
    );
  }

  renderColumns = () => {
    // Override this method in Class siblings;
    return (
      <thead>
        <tr>
          {this.columns.map(column => (
            <th id={column} key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  renderData = () => {
    // Override this method in Class siblings;
    return null;
  };
}

export default JRTable;
