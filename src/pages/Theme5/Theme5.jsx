import React, { Component } from 'react';
import IntroBanner from '../ThemeHome/components/IntroBanner';
import BasicTab from "../ThemeHome/components/BasicTab";
import Overview from "../ThemeHome/components/Overview";
import {Col, Row} from "@alifd/next/lib/grid";
import globalConf from "../../globalConfig";

const introBannerProp={
  themeId: 5,
  cmpInfoConf:{},
  dataDownloadConf:{
    dataUrl: 'http://pan.baidu.com',
    fetchCode: '888-666',
  },
  commitResConf:{},
  hotRankConf:{},
};

export default class Theme5 extends Component {
  static displayName = 'Theme5';
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row gutter="20" wrap>
        <Col l="24" xxs="24">
          <IntroBanner themeConf={globalConf.themeConf[4]} />
        </Col>
        <Col l="24" xxs="24">
          <div  style = {styles.sOverview}> <Overview themeConf={globalConf.themeConf[4]}/></div>

        </Col>
        <Col l="24" xxs="24">
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
