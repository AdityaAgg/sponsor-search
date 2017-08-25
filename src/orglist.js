import React, {Component} from 'react';
import {Organization} from './org';

export class OrgList extends React.Component {

  componentDidMount() {
    //var orgTitle = document.getElementsByClassName("org-desc");
    //console.log(orgTitle);
    //$clamp(orgTitle, {clamp: 3});
  }
  render() {

    const listItems = this.props.orgList.map((org) => {
      return (<Organization org={org} key ={org.id}/>);
    });

    return (
      <div className="org-list" >
        {listItems}
      </div>
    );
  }
}
