import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    console.log("Render item: ", item);
    if (column.content) return column.content(item);

    console.log("What lodash ouputs item: ", item);
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns, onUpdate } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {this.mod(item)}
            {this.updateBook(item)}
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  mod(item) {
    console.log("Mod body Start updating book: ", item);
    const dataItem = { ...item };
    // return dataItem;
  }

  updateBook(item) {
    console.log("Addeing button to update book: ", item);
    const temp = {
      author: "Yakim",
      isPublished: true,
      price: 4.5,
      title: "Ilia Mourovec",
      __v: 0,
      _id: "5c0c15c44ab5163e59de6d51"
    };
    return (
      <td>
        <button onClick={temp => this.props.onUpdate(temp)}>
          Update {item.title}
        </button>
      </td>
    );
  }
}

export default TableBody;
