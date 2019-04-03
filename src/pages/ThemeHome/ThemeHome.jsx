import React, { Component } from 'react';
import IntroBanner from './components/IntroBanner';
import BlackFooter from './components/BlackFooter';
import BasicTab from "./components/BasicTab";
import Overview from "./components/Overview";
import {Col, Row} from "@alifd/next/lib/grid";
import HotRank from "./components/HotRank";

export default class ThemeHome extends Component {
  static displayName = 'ThemeHome';
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row gutter="20" wrap>
        <Col l="24" xxs="24">
          <IntroBanner />
        </Col>
        <Col l="24" xxs="24">
          <div  style = {styles.sOverview}> <Overview /></div>

        </Col>
        <Col l="24" xxs="24">
          <BasicTab/>
        </Col>

        <Col l="24" xxs="24">
          <BlackFooter />
        </Col>
      </Row>
    );
  }
}

const styles = {
  sOverview: {
    marginTop: '20px',
  },
}
