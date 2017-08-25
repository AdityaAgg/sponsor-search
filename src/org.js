import React, {Component} from 'react';
export class Organization extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <div>
          {this.props.org.title}
        </div>
        <div>
          {this.props.org.description}
        </div>
        <div>
          {this.props.org.link}
        </div>
      </div>

    );
  }
}
