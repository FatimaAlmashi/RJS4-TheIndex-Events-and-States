import React, { Component } from "react";

class BookItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.book.title}</td>
        <td>{this.props.authorName}</td>
        <td>
          <button
            className="btn"
            style={{ backgroundColor: this.props.book.color }}
          />
        </td>
      </tr>
    );
  }
}

export default BookItem;
