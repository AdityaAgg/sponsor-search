import React, {Component} from 'react';
export class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  render() {
    return (
      <form>
        <input type="search" placeholder="Search..." className="search" onKeyPress={this.handleKeyPress} results/>

      </form>
    );
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log("Enter Pressed");
      this.props.onSearch(e.target.value);
      e.preventDefault();
    }
  }

}
