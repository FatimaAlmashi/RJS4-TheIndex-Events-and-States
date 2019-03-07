import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    filtered_authors: authors
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };
  resetAuthor = () => {
    this.setState({ currentAuthor: null });
  };
  filterAuthors = query => {
    this.setState({
      filtered_authors: authors.filter(author => {
        const authorName = `${author.first_name} ${
          author.last_name
        }`.toLowerCase();
        return authorName.includes(query);
      })
    });
  };
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar resetAuthor={this.resetAuthor} />
          </div>
          <div className="content col-10">
            {this.state.currentAuthor ? (
              <AuthorDetail currentAuthor={this.state.currentAuthor} />
            ) : (
              <AuthorsList
                authors={this.state.filtered_authors}
                selectAuthor={this.selectAuthor}
                filterAuthors={this.filterAuthors}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
