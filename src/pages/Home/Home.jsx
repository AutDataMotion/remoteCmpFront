import React, { Component } from 'react';
import IntroBanner from './components/IntroBanner';
import ApplicationProgress from './components/ApplicationProgress';
import BlackFooter from "../ThemeHome/components/BlackFooter";


export default class Home extends Component {
  static displayName = 'Home';
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
      </div>
    );
  }
}
