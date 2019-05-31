import React, { Component } from 'react';
import IntroBanner from './components/IntroBanner';
import BlackFooter from './components/BlackFooter';
import BasicTab from "./components/BasicTab";
import Overview from "./components/Overview";
import {Col, Row} from "@alifd/next/lib/grid";
import globalConf from "../../globalConfig";
//require('./components/BasicTab/BasicTab.css');
const introBannerProp={
  themeId: 1,
  cmpInfoConf:{},
  dataDownloadConf:{
    dataUrl: 'http://pan.baidu.com',
    fetchCode: '888-666',
  },
  commitResConf:{},
  hotRankConf:{},
};

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
          <IntroBanner themeConf={globalConf.themeConf[0]} />
        </Col>
        <Col l="24" xxs="24">
          <div  style = {styles.sOverview}> <Overview themeConf={globalConf.themeConf[0]}/></div>

        </Col>
        <Col l="24" xxs="24" >
          <div style = {styles.sOverview}>
            <BasicTab {...introBannerProp}/>
          </div>

        </Col>
      </Row>
    );
  }
}

const styles = {
  sOverview: {
    marginTop: '20px',
    marginLeft:'25px',
    marginRight:'25px',
    borderBottom:'1px solid rgba(130, 129, 129, 0.32)'
  },
}
