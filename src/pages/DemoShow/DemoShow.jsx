import React, { Component } from 'react';
import IntroBanner from './components/IntroBanner';
import ApplicationProgress from './components/ApplicationProgress';
import BlackFooter from './components/BlackFooter';
import AccountPanel from './components/AccountPanel';
import HotRank from './components/HotRank';
import BasicTab from './components/BasicTab';

export default class DemoShow extends Component {
  static displayName = 'DemoShow';
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="demo-show-page">
        <IntroBanner />
        <ApplicationProgress />
        <BlackFooter />
        <AccountPanel />
        <HotRank />
        <BasicTab />
      </div>
    );
  }
}
