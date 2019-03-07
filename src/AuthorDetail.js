import React, { Component } from "react";
import BookItem from "./BookItem";

class AuthorDetail extends Component {
  render() {
    const author = this.props.currentAuthor;
    const authorName = `${author.first_name} ${author.last_name}`;
    const bookList = author.books.map(book => (
      <BookItem key={book.title} book={book} authorName={authorName} />
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>{authorName}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail"
            alt=""
            width="300px"
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{bookList}</tbody>
        </table>
      </div>
    );
  }
}
export default AuthorDetail;
