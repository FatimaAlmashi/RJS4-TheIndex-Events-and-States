import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section onClick={this.props.resetAuthor}>
          <h4 className="menu-item active">
            <button>AUTHORS</button>
          </h4>
        </section>
      </div>
    );
  }
}

export default Sidebar;
