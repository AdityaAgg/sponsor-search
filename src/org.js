import React, {Component} from 'react';
import Truncate from 'react-truncate';
export class Organization extends React.Component {
  constructor(props) {
    super(props);
    this.openLink = this.openLink.bind(this);
  }
  openLink() {
    window.open(this.props.org.link, 'new_window');
  }

  render() {

    return (
      <div className="org" onClick={this.openLink}>
        <div className="org-title">
          {this.props.org.title}
        </div>
        <div className="org-desc" >
          <Truncate lines={3} ellipsis="...">
            {this.props.org.description}
          </Truncate>
        </div>

      </div>

    );
  }
}
