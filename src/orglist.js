import React, {Component} from 'react';
import {Organization} from './org';

export class OrgList extends React.Component {
  render() {

    const listItems = this.props.orgList.map((org) => {
      return (<Organization org={org} key ={org.id}/>);
    });

    return (
      <div>
        {listItems}
      </div>
    );
  }
}
