import React, { Component } from "react";
import axios from "axios";

class BooksPage extends Component {
  state = { books: [] };

  async componentDidMount() {
    console.log("Books page loaded and Retrieving data....");
    // const { data: books } = await axios.get("http://127.0.0.1:3001/api/books");
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

    this.setState({ books });
    console.log("Got books from service:", books);
    //this.setState({ books });
  }

  render() {
    return (
      <div>
        <h1>This is where the Books will display</h1>
        <h3>Books: {this.state.books.length}</h3>
        <table className="table table-primary">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Available</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.books.map(book => (
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.isPublished}</td>
                <td>
                  <button>Buy</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BooksPage;
