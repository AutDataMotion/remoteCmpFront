import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import IceContainer from '@icedesign/container';
import HotRank from "../HotRank";
import ThemeInfo1 from "./cmpInfo/themeInfo1";
import ThemeInfo6 from "./cmpInfo/themeInfo6";
import ThemeInfo5 from "./cmpInfo/themeInfo5";
import ThemeInfo4 from "./cmpInfo/themeInfo4";
import ThemeInfo3 from "./cmpInfo/themeInfo3";
import ThemeInfo2 from "./cmpInfo/themeInfo2";
import DataDownload from "./DataDownload";
import ModelTable from "./ModelTable";

export default class BasicTab extends Component {
  static displayName = 'BasicTab';


  handleChange = (key) =>{
    console.log(key);
  };

  renderThemeInfo = (themeId) =>{
    switch (themeId) {
      case 1:
        return (<ThemeInfo1/>);
      case 2:
        return (<ThemeInfo2/>);
      case 3:
        return (<ThemeInfo3/>);
      case 4:
        return (<ThemeInfo4/>);
      case 5:
        return (<ThemeInfo5/>);
      case 6:
        return (<ThemeInfo6/>);
    }
  };

  render() {

    const { themeId, cmpInfoConf, dataDownloadConf, commitResConf, hotRankConf } = this.props;
    return (
      <div className="basic-tab">
        <IceContainer style={styles.tabCardStyle}>

          <div className="demo-item-title"></div>
          <Tab shape="wrapped" tabPosition="left" onChange={this.handleChange}  contentClassName="custom-tab-content">
            <Tab.Item title="竞赛说明" key="1">{this.renderThemeInfo(themeId)}</Tab.Item>
            <Tab.Item title="数据下载" key="2"><DataDownload { ...dataDownloadConf}/></Tab.Item>
            <Tab.Item title="提交结果" key="3"><ModelTable themeId={themeId} {...commitResConf}/></Tab.Item>
            <Tab.Item title="排行榜单" key="4"><HotRank {...hotRankConf} themeId={themeId}/></Tab.Item>
          </Tab>

        </IceContainer>
      </div>
    );
  }
}

const styles = {
  tabCardStyle: {
    padding: 0,
  },
  demoItemTitle: {
  fontSize: '16px',
  color: '#333',
  padding: '8px',
  margin: '14px 0',
},

customContent: {
  padding: '15px',
},

nextTabsContent: {
  color: '#333',
  fontSize: '12px',
  padding: '12px',
},

customTabItem: {
  marginRight: '-1px !important',
},

justifyTabsTab: {
  width: '140px',
  textAlign: 'center',
},
};
