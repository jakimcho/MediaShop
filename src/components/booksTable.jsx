import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class BooksTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: book => <Link to={`/books/${book._id}`}>{book.title}</Link>
    },
    { path: "author", label: "Genre" },
    { path: "price", label: "Price" },
    { path: "isPublished", label: "Published" },
    {
      key: "Order",
      content: books => (
        <button
          onClick={() => this.props.onOrder(books)}
          className="btn btn-primary btn-sm"
        >
          Order
        </button>
      )
    }
  ];

  state = {};
  render() {
    const { books, onSort, onOrder, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={books}
        sortColumn={sortColumn}
        onSort={onSort}
        onOrder={onOrder}
      />
    );
  }
}

export default BooksTable;
