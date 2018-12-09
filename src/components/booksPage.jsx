import React, { Component } from "react";
import axios from "axios";
// import BooksTable from "./booksTable";

class BooksPage extends Component {
  state = {
    books: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    console.log("Books page loaded and Retrieving data....");
    // const { data: books } = await axios.get("http://127.0.0.1:3001/api/books");
    const books = this.getMockedBooks();

    this.setState({ books });
    console.log("Got books from service:", books);
    //this.setState({ books });
  }

  render() {
    const { length: count } = this.state.books;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { totalCount, data: books } = this.getPagedData();
    return (
      <div>
        <h1>This is where the Books will display</h1>
        <h3>Books: {this.state.books.length}</h3>
        {/*         <BooksTable
          books={books} // here props should be used
          sortColumn={sortColumn}
          onSort={this.handleSort}
          onOrder={this.handleOrder}
        /> */}
      </div>
    );
  }

  getPagedData = () => {
    const { books: allBooks } = this.state;

    return { totalCount: allBooks.length, data: allBooks };
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleOrder = book => {
    console.log("Book is ordered: ", book);
  };

  getMockedBooks = () => {
    const books = [
      {
        isPublished: true,
        _id: "5c0c15c44ab5163e59de6d51",
        title: "Ilia Mourovec",
        author: "Yakim",
        price: 4.5,
        __v: 0
      },
      {
        isPublished: true,
        _id: "5c0c15ef4ab5163e59de6d52",
        title: "Baron Miu-miun",
        author: "Yakim",
        price: 3.5,
        __v: 0
      },
      {
        isPublished: true,
        _id: "5c0c15ff4ab5163e59de6d53",
        title: "Ivan praseto",
        author: "Yakim",
        price: 6.5,
        __v: 0
      },
      {
        isPublished: true,
        _id: "5c0c160c4ab5163e59de6d54",
        title: "Kircho slamkata",
        author: "Yakim",
        price: 6.5,
        __v: 0
      }
    ];

    return books;
  };
}

export default BooksPage;
