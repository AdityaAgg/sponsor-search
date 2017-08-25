import React, {Component} from 'react';
import {OrgList} from './orglist';
import {SearchBar} from './searchbar';
import axios from 'axios';

export class FilterableOrgList extends React.Component {
  constructor(props) {
    super(props);
    this.searchFunc = this.searchFunc.bind(this);
  }

  searchFunc(param) {
    let url = "https://sponsorshipdirectorysc.mybluemix.net/api/search/" + encodeURIComponent(param);
    axios.get(url).then((res) => {

      this.setState({orgList: res.data.results});
    }, (err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.searchFunc("");
  }
  render() {
    let orgList;
    if (this.state && this.state.orgList)
      orgList = <OrgList orgList ={this.state.orgList}/>;
    return (
      <div>
        <SearchBar onSearch={this.searchFunc}/> {orgList}
      </div>
    );
  }

}
